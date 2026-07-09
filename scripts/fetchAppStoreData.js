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
      screenshots: data.screenshots || [],
      score: data.score || 0,
      scoreText: data.scoreText || '0.0',
      ratings: data.ratings || 0,
      reviews: data.reviews || 0,
      histogram: data.histogram || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      installs: data.installs || '',
      maxInstalls: data.maxInstalls || 0,
      priceText: data.priceText || 'Free',
      currency: data.currency || 'USD',
      size: data.size || '',
      androidVersionText: data.androidVersionText || '',
      developer: data.developer || '',
      developerEmail: data.developerEmail || '',
      developerWebsite: data.developerWebsite || '',
      privacyPolicy: data.privacyPolicy || '',
      genre: data.genre || '',
      genreId: data.genreId || '',
      familyGenre: data.familyGenre || '',
      familyGenreId: data.familyGenreId || '',
      icon: data.icon || '',
      headerImage: data.headerImage || '',
      video: data.video || '',
      videoImage: data.videoImage || '',
      contentRating: data.contentRating || '',
      contentRatingDescription: data.contentRatingDescription || '',
      adSupported: data.adSupported || false,
      released: data.released || '',
      updated: data.updated || 0,
      version: data.version || '',
      recentChanges: data.recentChanges || '',
      comments: data.comments || [],
      descriptionHTML: data.descriptionHTML || '',
      description: data.description || '',
    };
  } catch (error) {
    console.error(`Error fetching Play Store data for ${appId}:`, error.message);
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
      screenshots: data.screenshots || [],
      score: data.score || 0,
      reviews: data.reviews || 0,
      price: data.price || 0,
      free: data.free || true,
      currency: data.currency || 'USD',
      version: data.version || '',
      recentChanges: data.recentChanges || '',
      description: data.description || '',
      developer: data.developer || '',
      genre: data.primaryGenre || '',
      released: data.released || '',
      updated: data.updated || '',
      size: data.size ? formatBytes(data.size) : '',
      requiredOsVersion: data.requiredOsVersion || '',
      contentRating: data.contentRating || '',
    };
  } catch (error) {
    console.error(`Error fetching App Store data for ${appId}:`, error.message);
    return null;
  }
}

async function main() {
  console.log(`Starting to fetch data for ${apps.length} apps...`);
  for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    console.log(`Processing [${i + 1}/${apps.length}] ${app.title}...`);

    if (app.id) {
      console.log(`  Fetching Android data for com.pejoal.${app.id}...`);
      const playData = await fetchPlayStoreData(`com.pejoal.${app.id}`);
      if (playData) {
        app.playStoreData = playData;
      }
    }

    if (app.iosId) {
      console.log(`  Fetching iOS data for ${app.iosId}...`);
      const iosData = await fetchAppStoreData(app.iosId);
      if (iosData) {
        app.appStoreData = iosData;
      }
    }
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  fs.writeFileSync(dataPath, JSON.stringify(apps, null, 2));
  console.log('Finished fetching store data and updated appsData.json');
}

main().catch(console.error);
