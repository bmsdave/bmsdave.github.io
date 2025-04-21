// Import blog components
import { BlogPost } from './blog/BlogPost';
import { BlogIndex } from './blog/BlogIndex';
import { LatestPosts } from './blog/LatestPosts';

// Initialize the page
async function initPage(path?: string): Promise<void> {
  // Check if we're on a blog page
  path = path || window.location.pathname;

  // Get the content container
  const contentContainer = document.getElementById('blog-content');

  if (!contentContainer) {
    console.error('Content container not found');
    return;
  }

  // Add markdown stylesheet if not already present
  if (!document.querySelector('link[href="/github-markdown.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/github-markdown.css';
    document.head.appendChild(link);
  }

  if (path === '/blog' || path === '/blog/') {
    // Render blog index
    const blogIndex = new BlogIndex(contentContainer);
    await blogIndex.render();
  } else if (path.startsWith('/blog/')) {
    // Extract slug from path
    const slug = path.replace('/blog/', '');

    // Render blog post
    const blogPost = new BlogPost(contentContainer);
    await blogPost.render(slug);
  } else if (path === '/' || path === '') {
    // If we're on the homepage, render the latest posts section
    const latestPostsContainer = document.querySelector('.section-container:first-of-type');
    if (latestPostsContainer) {
      const latestPosts = new LatestPosts(latestPostsContainer as HTMLElement);
      await latestPosts.render();
    }
  }
}

// Function to handle navigation
function handleNavigation(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const link = target.closest('a');

  if (link && link.getAttribute('href')?.startsWith('/') && !link.getAttribute('target')) {
    event.preventDefault();
    const path = link.getAttribute('href') || '/';

    // Update the URL without reloading the page
    window.history.pushState({}, '', path);

    // Render the page for the new path
    initPage(path);
  }
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initPage();

  // Add event listener for navigation
  document.body.addEventListener('click', handleNavigation);

  // Add event listener for browser back/forward navigation
  window.addEventListener('popstate', () => {
    initPage();
  });
});
