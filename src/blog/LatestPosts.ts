import { loadAllBlogPosts } from './blogLoader';

export class LatestPosts {
  private container: HTMLElement;
  private limit: number;
  
  constructor(container: HTMLElement, limit: number = 3) {
    this.container = container;
    this.limit = limit;
  }
  
  /**
   * Renders the latest blog posts
   */
  async render(): Promise<void> {
    try {
      // Load all blog posts
      const posts = await loadAllBlogPosts();
      
      // Take only the first 'limit' posts
      const latestPosts = posts.slice(0, this.limit);
      
      if (latestPosts.length === 0) {
        this.renderEmpty();
        return;
      }
      
      // Render the latest posts
      const postsHtml = latestPosts.map(post => `
        <li class="post-item">
          <a href="/blog/${post.slug}">${post.title}</a>
          ${post.date ? `<small>Published: ${post.date}</small>` : ''}
          ${post.excerpt ? `<div class="post-excerpt">${post.excerpt.substring(0, 120)}${post.excerpt.length > 120 ? '...' : ''}</div>` : ''}
        </li>
      `).join('');
      
      // Изменяем заголовок в зависимости от количества постов
      const heading = this.limit > 3 ? "All Posts" : "Latest Posts";
      
      this.container.innerHTML = `
        <h3>${heading}</h3>
        <ul class="posts-grid">
          ${postsHtml}
        </ul>
      `;
    } catch (error) {
      console.error('Error rendering latest posts:', error);
      this.renderError();
    }
  }
  
  /**
   * Renders an empty state message
   */
  private renderEmpty(): void {
    this.container.innerHTML = `
      <h3>Blog Posts</h3>
      <p>No posts available at the moment.</p>
    `;
  }
  
  /**
   * Renders an error message
   */
  private renderError(): void {
    this.container.innerHTML = `
      <h3>Blog Posts</h3>
      <p>Error loading posts. Please try again later.</p>
    `;
  }
}