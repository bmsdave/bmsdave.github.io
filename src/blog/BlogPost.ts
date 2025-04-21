import { loadBlogPost } from './blogLoader';

export class BlogPost {
  private container: HTMLElement;
  
  constructor(container: HTMLElement) {
    this.container = container;
  }
  
  /**
   * Renders a blog post
   * @param slug The blog post slug
   */
  async render(slug: string): Promise<void> {
    try {
      // Show loading state
      this.container.innerHTML = '<div class="loading">Loading...</div>';
      
      // Load the blog post
      const post = await loadBlogPost(slug);
      
      if (!post) {
        this.renderError();
        return;
      }
      
      // Render the blog post
      this.container.innerHTML = `
        <div class="blog-post">
          <h1 class="blog-post-title">${post.title}</h1>
          <div class="blog-post-meta">
            ${post.date ? `<span>Published: ${post.date}</span>` : ''}
            ${post.author ? `<span> by ${post.author}</span>` : ''}
          </div>
          ${post.tags && post.tags.length > 0 ? `
            <div class="blog-tags">
              ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
          <div class="blog-post-content markdown-body">
            ${post.content}
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Error rendering blog post:', error);
      this.renderError();
    }
  }
  
  /**
   * Renders an error message
   */
  private renderError(): void {
    this.container.innerHTML = `
      <div class="error-container">
        <h1>Error</h1>
        <p>There was an error loading the blog post. Please try again later.</p>
      </div>
    `;
  }
}