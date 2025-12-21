# Pejoal Hanna - Professional Portfolio

A modern, responsive portfolio website built with Nuxt 3, Vue 3, and TailwindCSS. Features a clean design with dark mode support, smooth animations, and professional sections showcasing web projects, mobile apps, technical skills, and experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: AOS (Animate On Scroll) animations for enhanced user experience
- **Professional Sections**:
  - Personal profile and contact information
  - Google Play Developer profile with App Store placeholder
  - Mobile apps showcase with download links
  - Web projects portfolio with GitHub links
  - Technical and soft skills with proficiency indicators
  - Professional experience timeline
  - Languages and certifications
  - CV download section
- **Component-Based Architecture**: Modular components (all under 150 lines)
- **FontAwesome Icons**: Professional iconography
- **Static Site Generation**: Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- **Frontend**: Vue 3, Nuxt 4
- **Styling**: TailwindCSS 4
- **Icons**: FontAwesome
- **Animations**: AOS (Animate On Scroll)
- **Deployment**: GitHub Pages
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/pejoal/pejoal.github.io.git
cd pejoal.github.io
```

2. Install dependencies:

```bash
pnpm install
```

3. Add your assets:
   - Add your project screenshots to `public/assets/`
   - Update image paths in components if needed

## 🔧 Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Building

Generate the static site:

```bash
pnpm generate
```

Preview the built site:

```bash
pnpm preview
```

## 🚀 Deployment

### Automatic GitHub Pages Deployment

1. Push your code to GitHub
2. Go to your repository settings → Pages
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main/master branch

### Manual Deployment

You can deploy to any static hosting provider:

```bash
pnpm generate
# Upload the .output/public folder to your hosting provider
```

## 📁 Project Structure

```
├── components/
├── public/
│   └── assets/            # Static assets (images, CV, etc.)
├── app/
│   └── app.vue           # Main application component
├── .github/
│   └── workflows/
└── nuxt.config.ts       # Nuxt configuration
```

## ✨ Customization

### Personal Information

### Styling

- Global styles: `app/assets/css/main.css`
- TailwindCSS configuration in `nuxt.config.ts`
- Component-specific styles in each Vue component

## 📱 Mobile App Links

The portfolio includes links to:

- **Google Play Store**: Real links to published apps
- **Apple App Store**: Placeholder links (marked as "Coming Soon")
- **Web Versions**: Placeholder links for future web versions

## 🔗 Links

- **Live Demo**: [Your GitHub Pages URL]
- **Google Play Profile**: https://play.google.com/store/apps/dev?id=7584224843331524823
- **Email**: pejoal.business@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Pejoal Hanna
