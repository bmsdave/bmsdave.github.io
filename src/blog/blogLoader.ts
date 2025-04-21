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
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const frontmatterStr = match[1];
  const contentWithoutFrontmatter = content.replace(match[0], '');
  
  // Parse frontmatter
  const frontmatter: Record<string, any> = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: contentWithoutFrontmatter };
}

// Function to process markdown content
function processMarkdown(rawContent: string, slug: string): BlogPost {
  const { frontmatter, content } = extractFrontmatter(rawContent);
  
  // Process image paths to make them absolute
  const processedContent = content.replace(/!\[(.*?)\]\((\.\/.*?)\)/g, (match, alt, imagePath) => {
    const absolutePath = imagePath.replace('./', `/content/blog/${slug}/`);
    return `![${alt}](${absolutePath})`;
  });
  
  // Convert markdown to HTML
  const htmlContent = marked(processedContent);
  
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
    tags: frontmatter.tags ? frontmatter.tags.split(',').map((tag: string) => tag.trim()) : [],
    draft: frontmatter.draft === 'true' || frontmatter.draft === true
  };
}

// Function to load a blog post by slug
export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Use dynamic import to load the markdown file
    const module = await import(`../../content/blog/${slug}/index.md?raw`);
    const rawContent = module.default;
    
    return processMarkdown(rawContent, slug);
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