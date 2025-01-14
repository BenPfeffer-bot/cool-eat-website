# Cool Eat Website

A modern, responsive website built with React, TypeScript, and Vite.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cool-eat-website.git
cd cool-eat-website
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment file and configure it:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

## Building for Production

1. Create a production build:

```bash
npm run build
```

2. Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Static Hosting (Recommended)

The project is configured for static hosting on platforms like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. The `dist` folder will contain the production-ready files
3. Deploy these files to your hosting provider

## Environment Variables

Copy `.env.example` to `.env` and configure the following variables:

- `VITE_APP_NAME`: Application name
- `VITE_APP_ENV`: Environment (development/production)
- `VITE_APP_URL`: Application URL
- See `.env.example` for more options

## Best Practices

- Always run `npm run lint` before committing
- Keep dependencies updated
- Use TypeScript strictly
- Follow the project structure
- Test thoroughly before deployment

## License

[Your License] - See LICENSE file for details
