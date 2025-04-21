import { marked } from 'marked';
import path from 'path';

/**
 * Extracts frontmatter from markdown content
 * @param content Markdown content with frontmatter
 * @returns Object containing frontmatter data and content without frontmatter
 */
export function extractFrontmatter(content: string): { frontmatter: Record<string, any>; content: string } {
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

/**
 * Processes image paths in markdown content to make them absolute
 * @param content Markdown content
 * @param basePath Base path for resolving relative image paths
 * @returns Processed markdown content with updated image paths
 */
export function processImagePaths(content: string, basePath: string): string {
  // Replace image references like ![alt](./image.jpg) with absolute paths
  return content.replace(/!\[(.*?)\]\((\.\/.*?)\)/g, (_match, alt, imagePath) => {
    const absolutePath = imagePath.replace('./', `/${path.join(basePath, '')}`);
    return `![${alt}](${absolutePath})`;
  });
}

/**
 * Converts markdown content to HTML
 * @param content Markdown content
 * @param options Options for conversion
 * @returns HTML content
 */
export function markdownToHtml(content: string, options: { basePath?: string } = {}): string {
  let processedContent = content;
  
  // Process image paths if basePath is provided
  if (options.basePath) {
    processedContent = processImagePaths(processedContent, options.basePath);
  }
  
  // Convert markdown to HTML
  return marked(processedContent) as string;
}

/**
 * Processes a markdown file and returns HTML with metadata
 * @param content Full markdown content including frontmatter
 * @param basePath Base path for resolving relative paths
 * @returns Object with HTML content and frontmatter metadata
 */
export function processMarkdown(content: string, basePath: string): { html: string; metadata: Record<string, any> } {
  const { frontmatter, content: markdownContent } = extractFrontmatter(content);
  const html = markdownToHtml(markdownContent, { basePath });
  
  return {
    html,
    metadata: frontmatter
  };
}