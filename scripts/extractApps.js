import fs from 'fs';
import path from 'path';

const useAppPath = path.resolve('app/composables/useApp.js');
let content = fs.readFileSync(useAppPath, 'utf8');

// remove imports
content = content.replace(/import .* from 'vue';/, '');

// mock ref and computed
content = `
const ref = (v) => v;
const computed = (v) => v;
const onUnmounted = () => {};
` + content;

// Execute and extract
// We need to change export const to const so we can eval
content = content.replace(/export const/g, 'const');

content += `\n; global.extractedApps = useAppData().allApps;`;

eval(content);

const apps = global.extractedApps;

const outDir = path.resolve('app/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'appsData.json'), JSON.stringify(apps, null, 2));

console.log('Successfully extracted apps to app/data/appsData.json');
