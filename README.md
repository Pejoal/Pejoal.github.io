# Pejoal Hanna - Global Mobile Portfolio

> **🔒 Proprietary Repository**: This repository contains proprietary code, automation scripts, and data. It is strictly private and closed-source. Unauthorized copying, modification, or distribution is strictly prohibited.

Welcome to the engineering backbone of my professional mobile app portfolio. This project isn't just a static website; it is a highly optimized, automated platform built to showcase **48+ production mobile applications** deployed globally across the Google Play Store and Apple App Store.

## 🚀 The Architecture: Automated & Zero-Latency

To maintain an up-to-date portfolio of nearly 50 active apps, manual data entry is impossible. This project features a custom-built **Automated Data Scraping Engine**:

- **Live Store Sync**: A Node.js pipeline (`scripts/fetchAppStoreData.js`) that automatically interfaces with both Google Play and the Apple App Store.
- **Rich Metadata Extraction**: It pulls live, raw data directly from the storefronts, including:
  - Exact Install counts (e.g., `maxInstalls`)
  - Live Review Scores and Ratings
  - Descriptions, App Icons, Feature Graphics, and up to a dozen high-res Screenshots per app.
  - File sizes, Update timestamps, and version histories.
- **Zero-Latency Delivery**: The scraped data is compiled into an optimized `appsData.json` file. The frontend (built with Nuxt 3) statically generates (SSG) the entire site using this data, resulting in instantaneous page loads and flawless SEO.

## 📱 Frontend Features & UI/UX

The frontend is engineered to be as modern, responsive, and sleek as the apps it represents.

- **Glassmorphism Design System**: Heavy use of backdrop blurs, floating elements, and linear gradients tailored to each app's brand colors.
- **Smart Data Sorting**: Users can dynamically sort the 48+ app grid in real-time by:
  - **Most Installs**: Powered by Google Play's exact `maxInstalls` data.
  - **Highest Rated**: Powered by live store review scores.
  - **Recently Updated**: Powered by store timestamp parsing.
- **Rich App Cards**: Each card displays dynamic badges showing precise metrics (⭐ Rating, ⬇️ Installs, 📦 Size) at a glance, eliminating the need to click through for basic info.
- **Flawless Dark Mode**: Deep system integration for instant light/dark mode toggling.

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 & Vue 3 (Composition API)
- **Styling**: TailwindCSS 4
- **Automation**: Node.js (`google-play-scraper`, `app-store-scraper`)
- **Icons**: Heroicons & Simple Icons
- **Deployment**: GitHub Pages (Static Site Generation via `pnpm generate`)

## 📋 How to Add a New App

Because of the automated data pipeline, adding a new app takes seconds. 

1. Open `app/data/appsData.json`.
2. Locate the appropriate category array (e.g., `"germanApps"`, `"gameApps"`).
3. Insert a minimal JSON object with just the IDs:
   ```json
   {
     "id": "your_android_app_id",
     "iosId": "your-ios-slug/id123456789"
   }
   ```
4. Run the data fetch script in the terminal:
   ```bash
   npm run fetch-apps
   ```
5. The script will automatically scrape the stores, download the icons/screenshots, parse the descriptions, and inject all the heavy metadata back into the JSON file.

## 🔗 Links

- **Live Demo**: [Your GitHub Pages URL]
- **Google Play Profile**: https://play.google.com/store/apps/dev?id=7584224843331524823
- **Email**: business@pejoal.us.kg

---

Made with ❤️ by Pejoal Hanna
