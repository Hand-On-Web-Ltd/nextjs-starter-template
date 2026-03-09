# Next.js Business Website Starter 🚀

A ready-to-go Next.js template for business websites. Includes SEO meta tags, Open Graph, JSON-LD structured data, a working contact form, and a clean layout.

Built for small businesses that want a fast, SEO-friendly website without starting from scratch.

## Features

- **SEO Head component** — meta tags, Open Graph, Twitter cards, JSON-LD
- **Contact form** — posts to `/api/contact` (ready for email integration)
- **Clean footer** with company links
- **Mobile responsive** out of the box
- **No extra dependencies** — just Next.js and React

## Quick Start

```bash
git clone https://github.com/Hand-On-Web-Ltd/nextjs-starter-template.git
cd nextjs-starter-template
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── pages/
│   ├── index.js          # Homepage
│   ├── _app.js           # App wrapper
│   └── api/contact.js    # Contact form API endpoint
├── components/
│   ├── SEOHead.js        # Reusable SEO component
│   ├── ContactForm.js    # Contact form component
│   └── Footer.js         # Site footer
├── styles/
│   └── globals.css       # Global styles
└── next.config.js        # Next.js config
```

## Customisation

1. Update company details in `components/SEOHead.js` and `components/Footer.js`
2. Add your email service in `pages/api/contact.js`
3. Edit styles in `styles/globals.css`
4. Add more pages in the `pages/` directory

## About Hand On Web
We build AI chatbots, voice agents, and automation tools for businesses.
- 🌐 [handonweb.com](https://www.handonweb.com)
- 📧 outreach@handonweb.com
- 📍 Chester, UK

## Licence
MIT
