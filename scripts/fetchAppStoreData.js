import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gplay from 'google-play-scraper';
import appStore from 'app-store-scraper';

function formatBytes(bytes, decimals = 1) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../app/data/appsData.json');
let apps = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

async function fetchPlayStoreData(appId) {
  try {
    const data = await gplay.app({ appId });
    return {
      title: data.title,
      summary: data.summary,
      screenshots: Array.from(new Set(data.screenshots || [])).slice(0, 8),
      score: data.score || 0,
      scoreText: data.scoreText || '0.0',
      installs: data.installs || '',
      maxInstalls: data.maxInstalls || 0,
      size: data.size || '',
      icon: data.icon || '',
      headerImage: data.headerImage || '',
      adSupported: data.adSupported || false,
      released: data.released || '',
      updated: data.updated || 0,
      version: data.version || '',
      recentChanges: data.recentChanges || '',
      descriptionHTML: data.descriptionHTML || '',
    };
  } catch (error) {
    console.error(`\x1b[31mError fetching Play Store data for ${appId}: ${error.message}\x1b[0m`);
    return null;
  }
}

async function fetchAppStoreData(appId) {
  try {
    // iosId is in the format "slug/idXXXXXX". We just need the numeric ID.
    const idMatch = appId.match(/id(\d+)/);
    const id = idMatch ? idMatch[1] : appId;

    const data = await appStore.app({ id });
    return {
      title: data.title,
      icon: data.icon,
      screenshots: Array.from(new Set(data.screenshots || [])).slice(0, 8),
      score: data.score || 0,
      version: data.version || '',
      recentChanges: data.recentChanges || '',
      description: data.description || '',
      updated: data.updated || '',
      size: data.size ? formatBytes(data.size) : '',
    };
  } catch (error) {
    console.error(`\x1b[31mError fetching App Store data for ${appId}: ${error.message}\x1b[0m`);
    return null;
  }
}

async function processApp(app, index, total) {
  console.log(`[${index + 1}/${total}] Fetching ${app.title}...`);

  // Fetch both Android and iOS concurrently for the same app
  const [playResult, iosResult] = await Promise.all([
    app.id ? fetchPlayStoreData(`com.pejoal.${app.id}`) : Promise.resolve(null),
    app.iosId ? fetchAppStoreData(app.iosId) : Promise.resolve(null),
  ]);

  if (playResult) {
    app.title = playResult.title || app.title;
    app.description = playResult.summary || app.description;
    app.icon = playResult.icon || app.icon;

    delete playResult.title;
    delete playResult.summary;
    delete playResult.icon;
    delete playResult.description;

    app.playStoreData = playResult;
  }

  if (iosResult) {
    if (!playResult) {
      app.title = iosResult.title || app.title;
      app.description = iosResult.description || app.description;
      app.icon = iosResult.icon || app.icon;
    }

    delete iosResult.title;
    delete iosResult.icon;

    if (playResult && playResult.screenshots && playResult.screenshots.length > 0) {
      delete iosResult.screenshots;
    }

    app.appStoreData = iosResult;
  }
}

// Simple worker pool runner
async function runConcurrent(items, limit, workerFn) {
  let index = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const currentIndex = index++;
      await workerFn(items[currentIndex], currentIndex, items.length);
    }
  });
  await Promise.all(workers);
}

async function main() {
  const CONCURRENCY_LIMIT = 5; // 5 apps processed in parallel
  console.log(`Starting to fetch data for ${apps.length} apps with concurrency ${CONCURRENCY_LIMIT}...`);
  const startTime = Date.now();

  await runConcurrent(apps, CONCURRENCY_LIMIT, processApp);

  fs.writeFileSync(dataPath, JSON.stringify(apps, null, 2) + '\n');
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`Finished fetching store data and updated appsData.json in ${elapsed}s`);
}

main().catch(console.error);
