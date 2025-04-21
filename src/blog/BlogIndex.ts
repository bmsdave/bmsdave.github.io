import { loadAllBlogPosts } from './blogLoader';

export class BlogIndex {
  private container: HTMLElement;
  
  constructor(container: HTMLElement) {
    this.container = container;
  }
  
  /**
   * Renders the blog index page
   */
  async render(): Promise<void> {
    try {
      console.log('Starting to render blog index');
      // Show loading state
      this.container.innerHTML = '<div class="loading">Loading...</div>';
      
      // Load all blog posts
      const posts = await loadAllBlogPosts();
      console.log('Loaded posts:', posts);
      
      if (posts.length === 0) {
        console.log('No posts found');
        this.renderEmpty();
        return;
      }
      
      // Render the blog index
      const postsHtml = posts.map(post => `
        <li class="blog-post-item">
          <a href="/blog/${post.slug}">${post.title}</a>
          <div class="blog-post-meta">
            ${post.date ? `<span>Published: ${post.date}</span>` : ''}
            ${post.author ? `<span> by ${post.author}</span>` : ''}
          </div>
          ${post.excerpt ? `<div class="blog-post-excerpt">${post.excerpt}</div>` : ''}
          ${post.tags && post.tags.length > 0 ? `
            <div class="blog-tags">
              ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
          ` : ''}
        </li>
      `).join('');
      
      console.log('Rendering posts HTML');
      this.container.innerHTML = `
        <h1>Blog Posts</h1>
        <ul class="blog-post-list">
          ${postsHtml}
        </ul>
      `;
    } catch (error) {
      console.error('Error rendering blog index:', error);
      this.renderError();
    }
  }
  
  /**
   * Renders an empty state message
   */
  private renderEmpty(): void {
    this.container.innerHTML = `
      <div class="empty-container">
        <h1>No Posts Found</h1>
        <p>There are no blog posts available at the moment.</p>
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
        <p>There was an error loading the blog posts. Please try again later.</p>
      </div>
    `;
  }
}