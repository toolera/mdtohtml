export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Markdown to HTML Converter",
    "description": "Convert Markdown to HTML instantly with our free, fast, and responsive online converter. Perfect for developers, writers, and content creators.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://mdtohtml.vercel.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Markdown Converter"
    },
    "featureList": [
      "Real-time markdown to HTML conversion",
      "Mobile responsive design",
      "Copy to clipboard functionality",
      "Live preview",
      "Dark mode support",
      "No registration required"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}