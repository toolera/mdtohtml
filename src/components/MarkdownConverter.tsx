'use client';

import { useState, useCallback, useMemo } from 'react';
import { marked } from 'marked';

const MarkdownConverter = () => {
  const [markdown, setMarkdown] = useState(`# Markdown to HTML Converter

Welcome to this powerful yet simple markdown converter!

## Features

- **Real-time conversion**: See your HTML output as you type
- **Mobile responsive**: Works great on all devices
- **Clean interface**: Simple and intuitive design
- **Copy functionality**: Easy copy buttons for both formats

## Try it out

Type your markdown in the left panel and see the HTML output on the right.

### Example markdown:

\`\`\`javascript
console.log("Hello, World!");
\`\`\`

> This is a blockquote

- List item 1
- List item 2
- List item 3

**Bold text** and *italic text*

[Link to Google](https://google.com)
`);

  const [copied, setCopied] = useState<'markdown' | 'html' | null>(null);

  const sanitizedHtml = useMemo(() => {
    const rawHtml = marked(markdown) as string;
    // Basic HTML sanitization - in production consider using a more robust solution
    return rawHtml
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/on\w+='[^']*'/gi, '');
  }, [markdown]);

  const copyToClipboard = useCallback(async (text: string, type: 'markdown' | 'html') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Markdown to HTML Converter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Convert your markdown to clean HTML instantly. Simple, fast, and responsive.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Markdown Input */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b">
              <h2 className="font-semibold text-gray-700 dark:text-gray-300">
                Markdown Input
              </h2>
              <button
                onClick={() => copyToClipboard(markdown, 'markdown')}
                className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
              >
                {copied === 'markdown' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="p-4">
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-96 md:h-[500px] p-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-mono text-sm"
                placeholder="Enter your markdown here..."
              />
            </div>
          </div>

          {/* HTML Output */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b">
              <h2 className="font-semibold text-gray-700 dark:text-gray-300">
                HTML Output
              </h2>
              <button
                onClick={() => copyToClipboard(sanitizedHtml, 'html')}
                className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
              >
                {copied === 'html' ? 'Copied!' : 'Copy HTML'}
              </button>
            </div>
            <div className="p-4">
              <textarea
                value={sanitizedHtml}
                readOnly
                className="w-full h-96 md:h-[500px] p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white font-mono text-sm resize-none"
              />
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="max-w-7xl mx-auto mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b">
              <h2 className="font-semibold text-gray-700 dark:text-gray-300">
                Live Preview
              </h2>
            </div>
            <div className="p-6">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-600 dark:text-gray-400">
          <p>Built with Next.js, Tailwind CSS, and ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default MarkdownConverter;