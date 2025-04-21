import fs from 'fs';
import path from 'path';
import { processMarkdown } from '../utils/markdown';

// Base path for blog content
const BLOG_CONTENT_PATH = 'content/blog';

interface BlogPost {
  slug: string;
  metadata: Record<string, any>;
}

/**
 * Loads a blog post by slug
 * @param slug The blog post slug
 * @returns Object containing HTML content and metadata, or null if not found
 */
export function loadBlogPost(slug: string): { html: string; metadata: Record<string, any> } | null {
  try {
    const postPath = path.join(BLOG_CONTENT_PATH, slug, 'index.md');
    const content = fs.readFileSync(postPath, 'utf-8');
    const basePath = path.join(BLOG_CONTENT_PATH, slug);
    
    return processMarkdown(content, basePath);
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Gets a list of all blog posts
 * @returns Array of blog post metadata
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const blogDir = path.resolve(BLOG_CONTENT_PATH);
    const posts = fs.readdirSync(blogDir)
      .filter((dir: string) => {
        // Check if it's a directory and contains an index.md file
        const fullPath = path.join(blogDir, dir);
        return fs.statSync(fullPath).isDirectory() && 
               fs.existsSync(path.join(fullPath, 'index.md'));
      })
      .map((dir: string) => {
        const content = fs.readFileSync(path.join(blogDir, dir, 'index.md'), 'utf-8');
        const { metadata } = processMarkdown(content, path.join(BLOG_CONTENT_PATH, dir));
        
        return {
          slug: dir,
          metadata
        };
      })
      // Filter out draft posts
      .filter((post: BlogPost) => post.metadata.draft !== 'true' && post.metadata.draft !== true)
      // Sort by date (newest first)
      .sort((a: BlogPost, b: BlogPost) => {
        const dateA = new Date(a.metadata.date || '');
        const dateB = new Date(b.metadata.date || '');
        return dateB.getTime() - dateA.getTime();
      });
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

/**
 * Renders a blog post to HTML
 * @param slug The blog post slug
 * @returns HTML string with the complete blog post page, or null if not found
 */
export function renderBlogPost(slug: string): string | null {
  const post = loadBlogPost(slug);
  
  if (!post) {
    return null;
  }
  
  const { html, metadata } = post;
  
  // Create a complete HTML page with the blog post content
  return `
    <!DOCTYPE html>
    <html lang="${metadata.language || 'en'}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${metadata.title || 'Blog Post'}</title>
      <link rel="stylesheet" href="/style.css">
      <link rel="stylesheet" href="/node_modules/github-markdown-css/github-markdown-light.css">
      <style>
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
        }
        
        @media (max-width: 767px) {
          .markdown-body {
            padding: 15px;
          }
        }
        
        .blog-header {
          margin-bottom: 2rem;
        }
        
        .blog-title {
          margin-bottom: 0.5rem;
        }
        
        .blog-meta {
          color: #6c757d;
          margin-bottom: 1rem;
        }
      </style>
    </head>
    <body>
      <nav class="nav-header">
        <a class="logo-link" href="/">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
            <title>Vadim Gorbachev</title>
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/webstorm-icon-logo.svg" x="-25" width="150" height="100"></image>
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"></polygon>
          </svg>
        </a>
        <ul class="nav-links">
          <li class="nav-item"><a class="nav-link" href="/">Vadim Gorbachev</a></li>
          <li class="nav-item"><a href="/blog">Blog</a></li>
          <li class="nav-item"><a href="/talks">Talks</a></li>
        </ul>
      </nav>
      
      <div class="main-container">
        <div class="content-wrapper">
          <div class="blog-header">
            <h1 class="blog-title">${metadata.title || 'Untitled'}</h1>
            <div class="blog-meta">
              ${metadata.date ? `<span>Published: ${metadata.date}</span>` : ''}
              ${metadata.author ? `<span> by ${metadata.author}</span>` : ''}
              ${metadata.place ? `<span> in ${metadata.place}</span>` : ''}
            </div>
            ${metadata.tags ? `<div class="blog-tags">${metadata.tags}</div>` : ''}
          </div>
          
          <article class="markdown-body">
            ${html}
          </article>
        </div>
      </div>
      
      <div class="footer-wrapper">
        <footer class="footer">
          <div class="footer-content">
            <h5>© ${new Date().getFullYear()} Vadim Gorbachev</h5>
            <a href="/rss.xml">Subscribe</a>
          </div>
        </footer>
      </div>
    </body>
    </html>
  `;
}

/**
 * Renders the blog index page
 * @returns HTML string with the blog index page
 */
export function renderBlogIndex(): string {
  const posts = getAllBlogPosts();
  
  const postsHtml = posts.map(post => `
    <li class="blog-post-item">
      <a href="/blog/${post.slug}">${post.metadata.title || 'Untitled'}</a>
      <div class="blog-post-meta">
        ${post.metadata.date ? `<span>Published: ${post.metadata.date}</span>` : ''}
        ${post.metadata.author ? `<span> by ${post.metadata.author}</span>` : ''}
      </div>
    </li>
  `).join('');
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blog | Vadim Gorbachev</title>
      <link rel="stylesheet" href="/style.css">
      <style>
        .blog-post-list {
          list-style: none;
          padding: 0;
        }
        
        .blog-post-item {
          margin-bottom: 1.5rem;
        }
        
        .blog-post-item a {
          font-size: 1.25rem;
          font-weight: 600;
          text-decoration: none;
          color: #333;
        }
        
        .blog-post-item a:hover {
          text-decoration: underline;
        }
        
        .blog-post-meta {
          color: #6c757d;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
      </style>
    </head>
    <body>
      <nav class="nav-header">
        <a class="logo-link" href="/">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
            <title>Vadim Gorbachev</title>
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/webstorm-icon-logo.svg" x="-25" width="150" height="100"></image>
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"></polygon>
          </svg>
        </a>
        <ul class="nav-links">
          <li class="nav-item"><a class="nav-link" href="/">Vadim Gorbachev</a></li>
          <li class="nav-item"><a href="/blog">Blog</a></li>
          <li class="nav-item"><a href="/talks">Talks</a></li>
        </ul>
      </nav>
      
      <div class="main-container">
        <div class="content-wrapper">
          <h1>Blog Posts</h1>
          <ul class="blog-post-list">
            ${postsHtml}
          </ul>
        </div>
      </div>
      
      <div class="footer-wrapper">
        <footer class="footer">
          <div class="footer-content">
            <h5>© ${new Date().getFullYear()} Vadim Gorbachev</h5>
            <a href="/rss.xml">Subscribe</a>
          </div>
        </footer>
      </div>
    </body>
    </html>
  `;
}