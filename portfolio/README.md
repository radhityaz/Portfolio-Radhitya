# Radhitya Guntoro Adhi - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases Radhitya's skills, projects, education, and work experience with a sleek, animated interface and bilingual support (English and Indonesian).

## Features

- **Modern Tech Stack**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Animated UI**: Smooth animations and transitions using Framer Motion
- **Bilingual Support**: Toggle between English and Indonesian
- **Dark Theme**: Sleek dark theme with gradient accents
- **Sections**:
  - Hero section with animated introduction
  - About section with personal information
  - Timeline for education and work experience
  - Skills showcase
  - Projects portfolio
  - Contact form
  - Footer with social links

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/radhitya-portfolio.git
   cd radhitya-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up images:
   ```bash
   node setup-images.js
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── public/
│   └── images/           # Image assets
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── TimelineSection.tsx
│   ├── context/          # React context
│   │   └── LanguageContext.tsx
│   └── translations/     # i18n translations
│       ├── en.json       # English translations
│       └── id.json       # Indonesian translations
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── setup-images.js       # Script to set up images
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Customization

- **Content**: Update the content in the translation files (`src/translations/en.json` and `src/translations/id.json`)
- **Styling**: Modify the Tailwind configuration in `tailwind.config.ts`
- **Images**: Replace images in the `public/images` directory

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other static site hosting service.

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Intl](https://formatjs.io/docs/react-intl/)
