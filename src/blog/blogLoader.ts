// This module handles loading blog posts using Vite's dynamic imports
import { marked } from 'marked';

// Define the structure of a blog post
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author?: string;
  content: string;
  excerpt?: string;
  tags?: string[];
  draft?: boolean;
}

// Function to extract frontmatter from markdown content
function extractFrontmatter(content: string): { frontmatter: Record<string, any>; content: string } {
  // Проверяем наличие frontmatter (текст между двумя строками с тремя дефисами)
  // Учитываем как Windows (\r\n), так и Unix (\n) переводы строк
  const frontmatterRegex = /^---[\r\n]([\s\S]*?)[\r\n]---[\r\n]/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const frontmatterStr = match[1];
  // Удаляем весь блок frontmatter из контента, включая маркеры ---
  const contentWithoutFrontmatter = content.substring(match[0].length);
  
  // Parse frontmatter
  const frontmatter: Record<string, any> = {};
  
  // Разбиваем строки с учетом разных переводов строк
  const lines = frontmatterStr.split(/\r?\n/);
  
  lines.forEach(line => {
    // Skip empty lines
    if (!line.trim()) return;
    
    // Try to match key-value pairs
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Skip indented lines (nested YAML)
      if (!key.startsWith(' ') && !key.startsWith('\t')) {
        frontmatter[key] = value;
      }
    }
  });
  
  return { frontmatter, content: contentWithoutFrontmatter };
}

// Function to process markdown content
function processMarkdown(rawContent: string, slug: string): BlogPost {
  const { frontmatter, content } = extractFrontmatter(rawContent);
  
  // Единый подход к обработке путей к изображениям в markdown
  let processedContent = content;
  
  // Обрабатываем все варианты относительных путей к изображениям в markdown
  const processImagePath = (match: string, alt: string, imagePath: string): string => {
    // Если путь уже абсолютный или внешний - оставляем как есть
    if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
      return match;
    }
    
    // Преобразуем относительный путь в абсолютный
    const absolutePath = imagePath.startsWith('./') 
      ? imagePath.replace('./', `/content/blog/${slug}/`)
      : `/content/blog/${slug}/${imagePath}`;
      
    return `![${alt}](${absolutePath})`;
  };
  
  // Обработка markdown-ссылок на изображения с разными форматами путей
  processedContent = processedContent.replace(
    /!\[(.*?)\]\(([^)]+)\)/g, 
    (match, alt, path) => processImagePath(match, alt, path.replace(/["']/g, ''))
  );
  
  // Convert markdown to HTML
  let htmlContent = marked(processedContent) as string;
  
  // Постобработка HTML для исправления относительных путей в тегах img
  htmlContent = htmlContent.replace(
    /<img[^>]+src="([^"]+)"[^>]*>/g, 
    (match, src) => {
      // Если путь уже абсолютный или внешний - оставляем как есть
      if (src.startsWith('/') || src.startsWith('http')) {
        return match;
      }
      
      // Преобразуем относительный путь в абсолютный
      const absolutePath = src.startsWith('./') 
        ? src.replace('./', `/content/blog/${slug}/`)
        : `/content/blog/${slug}/${src}`;
        
      return match.replace(`src="${src}"`, `src="${absolutePath}"`);
    }
  );
  
  // Create excerpt (first 150 characters)
  const plainText = processedContent.replace(/#+\s+(.*?)\n/g, '$1 ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const excerpt = plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');
  
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || '',
    author: frontmatter.author,
    content: htmlContent,
    excerpt,
    tags: frontmatter.tags ? (typeof frontmatter.tags === 'string' ? frontmatter.tags.split(',').map((tag: string) => tag.trim()) : frontmatter.tags) : [],
    draft: frontmatter.draft === 'true' || frontmatter.draft === true
  };
}

// Function to load a blog post by slug
export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Use fetch to load the markdown file
    const response = await fetch(`/content/blog/${slug}/index.md`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post ${slug}: ${response.status} ${response.statusText}`);
    }
    
    const rawContent = await response.text();
    
    // Нормализуем переводы строк перед обработкой
    const normalizedContent = rawContent.replace(/\r\n/g, '\n');
    
    return processMarkdown(normalizedContent, slug);
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

// Function to load all blog posts
export async function loadAllBlogPosts(): Promise<BlogPost[]> {
  // This is a list of all blog post slugs
  // In a real application, this would be generated at build time
  const slugs = [
    'y-combinator',
    'piterjsconf-2019',
    'auth-vulnerabilities',
    'first-post',
    'eda'
  ];
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const post = await loadBlogPost(slug);
        return post;
      } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error);
        return null;
      }
    })
  );
  
  // Filter out null posts and drafts, then sort by date
  return posts
    .filter((post): post is BlogPost => post !== null && !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}