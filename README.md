# Markdown to HTML Converter

A fast, responsive, and user-friendly markdown to HTML converter built with Next.js and Tailwind CSS.

## 🌟 Features

- **Real-time conversion**: See HTML output as you type markdown
- **Mobile responsive**: Works perfectly on desktop, tablet, and mobile devices  
- **Live preview**: See how your HTML will render in real-time
- **Copy functionality**: One-click copy for both markdown and HTML
- **Dark mode support**: Automatic dark/light theme detection
- **SEO optimized**: Full meta tags, structured data, and accessibility
- **No registration required**: Use immediately without any setup

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mdtohtml
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📱 Mobile-First Design

The application is built with a mobile-first approach using Tailwind CSS:
- Responsive grid layout that adapts to screen size
- Touch-friendly buttons and controls
- Optimized typography for readability on all devices
- Smooth scrolling and interactions

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with Typography plugin
- **Markdown Parser**: Marked.js
- **HTML Sanitization**: DOMPurify
- **Language**: TypeScript
- **Deployment**: Vercel (optimized)

## 🌐 SEO Features

- Complete meta tags for social media sharing
- Structured data (JSON-LD) for search engines
- Open Graph and Twitter Card support
- Semantic HTML structure
- Lighthouse-optimized performance
- Mobile-friendly meta viewport

## 🚀 Deploy to Vercel

The easiest way to deploy this app is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/mdtohtml)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to configure your deployment.

### Environment Variables

For production, you can set:
- `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://mdtohtml.vercel.app)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO meta
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── MarkdownConverter.tsx  # Main converter component
    └── StructuredData.tsx     # SEO structured data
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
