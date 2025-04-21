// Import blog components
import { BlogPost } from './blog/BlogPost';
import { BlogIndex } from './blog/BlogIndex';
import { LatestPosts } from './blog/LatestPosts';

// Глобальная переменная для отслеживания инициализации
let isInitialized = false;

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

  // Проверяем, не является ли запрос обращением к статическому файлу
  const fileExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.css', '.js'];
  const isStaticFile = fileExtensions.some(ext => path?.toLowerCase().endsWith(ext));
  
  if (isStaticFile) {
    return;
  }

  if (path === '/blog' || path === '/blog/') {
    // Render blog index
    const blogIndex = new BlogIndex(contentContainer);
    await blogIndex.render();
  } else if (path?.startsWith('/blog/')) {
    // Extract slug from path
    const slug = path.replace('/blog/', '');
    
    // Check if this is a valid blog post slug (не содержит точек)
    if (!slug.includes('.')) {
      // Render blog post
      const blogPost = new BlogPost(contentContainer);
      await blogPost.render(slug);
    }
  } else if (path === '/' || path === '') {
    // If we're on the homepage, render the latest posts section
    const latestPostsContainer = document.querySelector('.section-container:first-of-type');
    if (latestPostsContainer) {
      const latestPosts = new LatestPosts(latestPostsContainer as HTMLElement);
      await latestPosts.render();
    }
  }
}

// Функция для настройки обработчиков всех внутренних ссылок
function setupLinkHandlers(): void {
  // Добавляем глобальный обработчик для всех ссылок
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    
    // Пропускаем внешние ссылки, ссылки с target="_blank" и ссылки к статическим файлам
    if (!href || 
        href.startsWith('http') || 
        href.startsWith('//') || 
        link.hasAttribute('target') ||
        /\.(jpg|jpeg|png|gif|svg|webp|css|js)$/i.test(href)) {
      return;
    }
    
    // Пропускаем ссылки, которые не начинаются с "/"
    if (!href.startsWith('/')) {
      return;
    }
    
    // Предотвращаем стандартное поведение только для внутренних ссылок на страницы
    event.preventDefault();
      
    // Обновляем URL без перезагрузки страницы
    window.history.pushState({}, '', href);
    
    // Очищаем контейнер контента
    const contentContainer = document.getElementById('blog-content');
    if (contentContainer) {
      contentContainer.innerHTML = '';
    }
    
    // Рендерим страницу для нового пути
    initPage(href);
  });
}

// Функция для инициализации всего приложения
function initApp(): void {
  if (isInitialized) return;
  
  isInitialized = true;
  
  // Инициализируем страницу
  initPage()
    .then(() => {
      // После инициализации страницы настраиваем обработчики ссылок
      setupLinkHandlers();
    })
    .catch(error => {
      console.error('Error initializing page:', error);
    });
  
  // Добавляем обработчик для кнопок назад/вперед
  window.addEventListener('popstate', () => {
    initPage();
  });
}

// Запускаем приложение при загрузке DOM
document.addEventListener('DOMContentLoaded', initApp);

// На всякий случай запускаем приложение и при загрузке окна
window.addEventListener('load', initApp);
