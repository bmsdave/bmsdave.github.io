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
    console.log('No frontmatter found in content');
    // Выводим первые 150 символов для диагностики
    console.log('Content preview:', content.substring(0, 150).replace(/\n/g, '\\n').replace(/\r/g, '\\r'));
    return { frontmatter: {}, content };
  }
  
  const frontmatterStr = match[1];
  // Удаляем весь блок frontmatter из контента, включая маркеры ---
  const contentWithoutFrontmatter = content.substring(match[0].length);
  console.log('Content length after frontmatter removal:', contentWithoutFrontmatter.length);
  
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
  
  console.log('Extracted frontmatter:', frontmatter); // Debugging
  
  return { frontmatter, content: contentWithoutFrontmatter };
}

// Function to process markdown content
function processMarkdown(rawContent: string, slug: string): BlogPost {
  const { frontmatter, content } = extractFrontmatter(rawContent);
  
  // Более универсальный подход к обработке путей к изображениям
  let processedContent = content;
  
  // 1. Обработка относительных путей без кавычек: ![alt](./image.png)
  processedContent = processedContent.replace(/!\[(.*?)\]\((\.\/[^)]+)\)/g, (_match, alt, imagePath) => {
    const absolutePath = imagePath.replace('./', `/content/blog/${slug}/`);
    console.log(`Processed image path: ${imagePath} -> ${absolutePath}`);
    return `![${alt}](${absolutePath})`;
  });
  
  // 2. Обработка относительных путей с кавычками: ![alt]("./image.png")
  processedContent = processedContent.replace(/!\[(.*?)\]\("(\.\/[^"]+)"\)/g, (_match, alt, imagePath) => {
    const absolutePath = imagePath.replace('./', `/content/blog/${slug}/`);
    console.log(`Processed quoted image path: ${imagePath} -> ${absolutePath}`);
    return `![${alt}](${absolutePath})`;
  });
  
  // 3. Обработка относительных путей с одинарными кавычками: ![alt]('./image.png')
  processedContent = processedContent.replace(/!\[(.*?)\]\('(\.\/[^']+)'\)/g, (_match, alt, imagePath) => {
    const absolutePath = imagePath.replace('./', `/content/blog/${slug}/`);
    console.log(`Processed single-quoted image path: ${imagePath} -> ${absolutePath}`);
    return `![${alt}](${absolutePath})`;
  });
  
  // 4. Обработка путей без ./ но внутри директории: ![alt](image.png)
  processedContent = processedContent.replace(/!\[(.*?)\]\(([^\/\)]+\.(png|jpg|jpeg|gif|svg))\)/gi, (_match, alt, imagePath) => {
    const absolutePath = `/content/blog/${slug}/${imagePath}`;
    console.log(`Processed direct image path: ${imagePath} -> ${absolutePath}`);
    return `![${alt}](${absolutePath})`;
  });
  
  // Выведем в консоль первую найденную ссылку на изображение для отладки
  const imgMatch = content.match(/!\[(.*?)\]\(([^)]+)\)/);
  if (imgMatch) {
    console.log(`Found image in content: ${imgMatch[0]}, path: ${imgMatch[2]}`);
  } else {
    console.log('No images found in content using standard syntax');
  }
  
  // Convert markdown to HTML
  let htmlContent = marked(processedContent) as string;
  
  // Постобработка HTML для исправления относительных путей изображений
  htmlContent = htmlContent.replace(/<img[^>]+src="\.\/([^"]+)"[^>]*>/g, (match, imagePath) => {
    const absolutePath = `/content/blog/${slug}/${imagePath}`;
    console.log(`Fixed image path in HTML: ./${imagePath} -> ${absolutePath}`);
    return match.replace(`src="./${imagePath}"`, `src="${absolutePath}"`);
  });
  
  // Также обработаем изображения без ./ в пути
  htmlContent = htmlContent.replace(/<img[^>]+src="([^"\/][^"]+\.(png|jpg|jpeg|gif|svg))"[^>]*>/gi, (match, imagePath) => {
    // Если путь не начинается с / или http, то считаем его относительным
    if (!imagePath.startsWith('/') && !imagePath.startsWith('http')) {
      const absolutePath = `/content/blog/${slug}/${imagePath}`;
      console.log(`Fixed relative image path in HTML: ${imagePath} -> ${absolutePath}`);
      return match.replace(`src="${imagePath}"`, `src="${absolutePath}"`);
    }
    return match;
  });
  
  // Проверим наличие тегов img в получившемся HTML
  const imgTagMatches = htmlContent.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
  console.log(`Found ${imgTagMatches ? imgTagMatches.length : 0} image tags in HTML`);
  if (imgTagMatches) {
    console.log('Example image tag:', imgTagMatches[0]);
  }
  
  // Create excerpt (first 150 characters)
  const plainText = processedContent.replace(/#+\s+(.*?)\n/g, '$1 ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const excerpt = plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');
  
  // Log frontmatter for debugging
  console.log(`Post ${slug} frontmatter:`, frontmatter);
  
  // Extract title, checking for both styles of quotes
  const title = frontmatter.title || 'Untitled';
  console.log(`Extracted title: ${title}`);
  
  return {
    slug,
    title,
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
    console.log(`Loading blog post: ${slug}`); // Debugging
    
    // Use fetch to load the markdown file
    const response = await fetch(`/content/blog/${slug}/index.md`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog post ${slug}: ${response.status} ${response.statusText}`);
    }
    
    const rawContent = await response.text();
    console.log(`Raw content length: ${rawContent.length} bytes`); // Debugging
    
    // Проверим начало контента для диагностики с отображением символов переноса строки
    const contentSample = rawContent.substring(0, 100)
      .replace(/\r/g, '\\r')
      .replace(/\n/g, '\\n');
    console.log(`Content starts with encoded newlines: ${contentSample}...`);
    
    // Нормализуем переводы строк перед обработкой
    const normalizedContent = rawContent.replace(/\r\n/g, '\n');
    
    const post = processMarkdown(normalizedContent, slug);
    console.log(`Processed post title: "${post.title}"`); // Debugging
    
    return post;
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