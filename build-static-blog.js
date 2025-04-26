import fs from 'fs';
import path from 'path';
import { renderBlogPost } from './src/blog/blogRenderer.ts'; // путь к исходному JS-файлу

// Список slug'ов статей
const slugs = [
  'y-combinator',
  'piterjsconf-2019',
  'auth-vulnerabilities',
  'eda'
];

const distDir = path.resolve('dist/blog');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Генерируем HTML-файл для каждой статьи
for (const slug of slugs) {
  try {
    const html = renderBlogPost(slug);
    if (html) {
      fs.writeFileSync(path.join(distDir, `${slug}.html`), html, 'utf-8');
      console.log(`Generated: blog/${slug}.html`);
    } else {
      console.warn(`Failed to render: ${slug}`);
    }
  } catch (e) {
    console.error(`Ошибка генерации для ${slug}:`, e);
  }
}

// Обновляем ссылки в index.html
const indexPath = path.resolve('index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Заменяем ссылки вида /blog/slug на /blog/slug.html
indexHtml = indexHtml.replace(/href="\/blog\/(y-combinator|piterjsconf-2019|auth-vulnerabilities|eda)"/g, (match, slug) => `href="/blog/${slug}.html"`);

fs.writeFileSync(path.resolve('dist/index.html'), indexHtml, 'utf-8');
console.log('Updated links in dist/index.html'); 