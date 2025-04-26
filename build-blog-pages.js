import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, 'content', 'blog');
const publicDir = path.join(__dirname, 'public', 'blog');

// Ensure public/blog directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// Function to parse frontmatter using gray-matter
function parseFrontmatter(content) {
    try {
        const result = matter(content);
        return {
            content: result.content,
            frontmatter: result.data
        };
    } catch (error) {
        console.error('Error parsing frontmatter:', error);
        return { content, frontmatter: {} };
    }
}

// HTML template with github-markdown-css and light theme
const htmlTemplate = (content, title, frontmatter) => `
<!DOCTYPE html>
<html lang="${frontmatter.language || 'en'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${frontmatter.title || title} | bmsdave's Blog</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="${frontmatter.title || title}">
    <meta name="description" content="${frontmatter.description}">
    <meta name="author" content="${frontmatter.author || ''}">
    <meta name="date" content="${frontmatter.date || ''}">
    <meta name="keywords" content="${frontmatter.tags ? frontmatter.tags.join(', ') : ''}">
    <meta name="language" content="${frontmatter.language || 'en'}">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://bmsdave.github.io/blog/${title}/">
    <meta property="og:title" content="${frontmatter.title || title}">
    <meta property="og:description" content="${frontmatter.description}">
    ${frontmatter.cover ? `<meta property="og:image" content="https://bmsdave.github.io/blog/${title}/${frontmatter.cover}">` : ''}
    <meta property="article:published_time" content="${frontmatter.date || ''}">
    <meta property="article:author" content="${frontmatter.author || ''}">
    ${frontmatter.tags ? frontmatter.tags.map(tag => `<meta property="article:tag" content="${tag}">`).join('\n    ') : ''}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://bmsdave.github.io/blog/${title}/">
    <meta property="twitter:title" content="${frontmatter.title || title}">
    <meta property="twitter:description" content="${frontmatter.description}">
    ${frontmatter.cover ? `<meta property="twitter:image" content="https://bmsdave.github.io/blog/${title}/${frontmatter.cover}">` : ''}
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://bmsdave.github.io/blog/${title}/">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${frontmatter.title || title}",
        "description": "${frontmatter.description}",
        "image": "${frontmatter.cover ? `https://bmsdave.github.io/blog/${title}/${frontmatter.cover}` : ''}",
        "author": {
            "@type": "Person",
            "name": "${frontmatter.author || ''}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "bmsdave",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bmsdave.github.io/logo.png"
            }
        },
        "datePublished": "${frontmatter.date || ''}",
        "dateModified": "${frontmatter.date || ''}",
        "keywords": "${frontmatter.tags ? frontmatter.tags.join(', ') : ''}",
        "inLanguage": "${frontmatter.language || 'en'}"
    }
    </script>
    
    <link rel="stylesheet" href="/github-markdown.css">
    <style>
        body {
            background-color: #ffffff;
            color: #24292e;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
        }

        .markdown-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background-color: #ffffff;
            color: #24292e;
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .article-header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eaecef;
        }

        .article-header h1 {
            margin: 0 0 0.5rem 0;
            font-size: 2.5rem;
            color: #24292e;
            font-weight: 600;
        }

        .article-meta {
            color: #6a737d;
            font-size: 0.9rem;
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
        }

        .article-meta span {
            display: flex;
            align-items: center;
        }

        .article-meta span::before {
            content: "•";
            margin-right: 0.5rem;
            color: #e1e4e8;
        }

        .article-meta span:first-child::before {
            display: none;
        }

        .article-cover {
            margin: 2rem 0;
            text-align: center;
        }

        .article-cover img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .article-tags {
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .article-tag {
            background-color: #f6f8fa;
            color: #24292e;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            font-size: 0.8rem;
            text-decoration: none;
            transition: background-color 0.2s ease;
        }

        .article-tag:hover {
            background-color: #e1e4e8;
        }

        .markdown-body h2 {
            font-size: 2rem;
            margin-top: 2rem;
            margin-bottom: 1.25rem;
            color: #24292e;
        }

        .markdown-body h3 {
            font-size: 1.5rem;
            margin-top: 1.75rem;
            margin-bottom: 1rem;
            color: #24292e;
        }

        .markdown-body p {
            margin-bottom: 1.5rem;
            color: #24292e;
        }

        .markdown-body a {
            color: #0366d6;
            text-decoration: none;
        }

        .markdown-body a:hover {
            text-decoration: underline;
        }

        .markdown-body code {
            background-color: rgba(27, 31, 35, 0.05);
            color: #24292e;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 0.9em;
        }

        .markdown-body pre {
            background-color: #f6f8fa;
            padding: 1rem;
            border-radius: 6px;
            overflow-x: auto;
            margin: 1.5rem 0;
        }

        .markdown-body pre code {
            background-color: transparent;
            padding: 0;
            color: #24292e;
        }

        .markdown-body blockquote {
            color: #6a737d;
            border-left: 4px solid #dfe2e5;
            padding: 1rem;
            margin: 1.5rem 0;
            background-color: #f6f8fa;
            border-radius: 0 6px 6px 0;
        }

        .markdown-body ul, 
        .markdown-body ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
        }

        .markdown-body li {
            margin-bottom: 0.5rem;
        }

        .markdown-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }

        .markdown-body table th,
        .markdown-body table td {
            padding: 0.75rem;
            border: 1px solid #dfe2e5;
        }

        .markdown-body table th {
            background-color: #f6f8fa;
            color: #24292e;
        }

        .markdown-body table tr {
            background-color: #ffffff;
        }

        .markdown-body table tr:nth-child(2n) {
            background-color: #f6f8fa;
        }

        .markdown-body img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            margin: 1.5rem 0;
            display: block;
        }

        @media (max-width: 767px) {
            .markdown-body {
                padding: 1rem;
                font-size: 1rem;
            }

            .article-header h1 {
                font-size: 2rem;
            }

            .markdown-body h2 {
                font-size: 1.75rem;
            }

            .markdown-body h3 {
                font-size: 1.25rem;
            }
        }
    </style>
</head>
<body>
    <article class="markdown-body">
        <div class="article-header">
            <h1>${frontmatter.title || title}</h1>
            <div class="article-meta">
                ${frontmatter.author ? `<span>${frontmatter.author}</span>` : ''}
                ${frontmatter.date ? `<span>${frontmatter.date}</span>` : ''}
                ${frontmatter.place ? `<span>${frontmatter.place}</span>` : ''}
            </div>
            ${frontmatter.cover && frontmatter.showCoverInPost ? 
                `<div class="article-cover">
                    <img src="/blog/${title}/${frontmatter.cover}" alt="${frontmatter.title || title}">
                </div>` : ''}
            ${frontmatter.tags ? `
                <div class="article-tags">
                    ${frontmatter.tags.map(tag => `<a href="/blog/tag/${tag}" class="article-tag">${tag}</a>`).join('')}
                </div>
            ` : ''}
        </div>
        ${content}
    </article>
</body>
</html>
`;

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Process each blog post directory
fs.readdirSync(contentDir).forEach(postDir => {
    const postPath = path.join(contentDir, postDir);
    if (fs.statSync(postPath).isDirectory()) {
        // Look for index.md in each post directory
        const indexPath = path.join(postPath, 'index.md');
        if (fs.existsSync(indexPath)) {
            // Create post directory in public/blog
            const publicPostDir = path.join(publicDir, postDir);
            if (!fs.existsSync(publicPostDir)) {
                fs.mkdirSync(publicPostDir, { recursive: true });
            }

            // Copy all files from post directory to public/blog/postDir
            copyDir(postPath, publicPostDir);

            const markdown = fs.readFileSync(indexPath, 'utf-8');
            const { content: markdownContent, frontmatter } = parseFrontmatter(markdown);
            
            // Update image paths in markdown
            const updatedMarkdown = markdownContent.replace(
                /!\[(.*?)\]\((.*?)\)/g,
                (match, alt, src) => {
                    // If the image path is relative, update it to point to the copied image
                    if (!src.startsWith('http')) {
                        const imageName = path.basename(src);
                        return `![${alt}](/blog/${postDir}/${imageName})`;
                    }
                    return match;
                }
            );

            const html = marked.parse(updatedMarkdown);
            
            // Write HTML file as index.html in the post directory
            fs.writeFileSync(
                path.join(publicPostDir, 'index.html'),
                htmlTemplate(html, postDir, frontmatter)
            );
            
            console.log(`Generated HTML for: ${postDir}`);
        }
    }
});

console.log('Blog pages generation complete!');