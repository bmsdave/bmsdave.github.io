import { loadBlogPost } from './blogLoader';

export class BlogPost {
  private container: HTMLElement;
  
  constructor(container: HTMLElement) {
    this.container = container;
  }
  
  /**
   * Renders a blog post by slug
   * @param slug The blog post slug
   */
  async render(slug: string): Promise<void> {
    try {
      // Show loading state
      this.container.innerHTML = '<div class="loading">Loading...</div>';
      
      // Load the blog post
      const post = await loadBlogPost(slug);
      
      if (!post) {
        this.renderNotFound();
        return;
      }
      
      // Render the blog post
      this.container.innerHTML = `
        <div class="blog-header">
          <h1 class="blog-title">${post.title}</h1>
          <div class="blog-meta">
            ${post.date ? `<span>Published: ${post.date}</span>` : ''}
            ${post.author ? `<span> by ${post.author}</span>` : ''}
          </div>
          ${post.tags && post.tags.length > 0 ? `
            <div class="blog-tags">
              ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </div>
        
        <article class="markdown-body">
          ${post.content}
        </article>
      `;
    } catch (error) {
      console.error('Error rendering blog post:', error);
      this.renderError();
    }
  }
  
  /**
   * Renders a not found message
   */
  private renderNotFound(): void {
    this.container.innerHTML = `
      <div class="error-container">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <a href="/blog">Back to Blog</a>
      </div>
    `;
  }
  
  /**
   * Renders an error message
   */
  private renderError(): void {
    this.container.innerHTML = `
      <div class="error-container">
        <h1>Error</h1>
        <p>There was an error loading the blog post. Please try again later.</p>
        <a href="/blog">Back to Blog</a>
      </div>
    `;
  }
}