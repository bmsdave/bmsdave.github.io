// Скрипт для генерации RSS-ленты
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

// Получаем текущую директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к директории с постами блога
const BLOG_DIR = path.join(__dirname, 'content', 'blog');
// Путь для сохранения RSS-файла
const RSS_OUTPUT_PATH = path.join(__dirname, 'public', 'rss.xml');

// Функция для форматирования даты в формат RFC 822
function formatRFC822Date(dateString) {
  try {
    const date = new Date(dateString);
    return date.toUTCString();
  } catch (e) {
    return new Date().toUTCString();
  }
}

// Функция для экранирования XML-символов
function escapeXML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Функция для извлечения frontmatter из markdown-файла
function extractFrontmatter(content) {
  const frontmatterRegex = /^---[\r\n]([\s\S]*?)[\r\n]---[\r\n]/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const frontmatterStr = match[1];
  const contentWithoutFrontmatter = content.substring(match[0].length);
  
  const frontmatter = {};
  const lines = frontmatterStr.split(/\r?\n/);
  
  lines.forEach(line => {
    if (!line.trim()) return;
    
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      if (!key.startsWith(' ') && !key.startsWith('\t')) {
        frontmatter[key] = value;
      }
    }
  });
  
  return { frontmatter, content: contentWithoutFrontmatter };
}

// Функция для получения списка всех директорий с постами
function getBlogPostDirectories() {
  try {
    return fs.readdirSync(BLOG_DIR)
      .filter(dir => {
        const fullPath = path.join(BLOG_DIR, dir);
        return fs.statSync(fullPath).isDirectory() && 
               fs.existsSync(path.join(fullPath, 'index.md'));
      });
  } catch (error) {
    console.error('Error reading blog directories:', error);
    return [];
  }
}

// Функция для создания элемента <item> для RSS
function createRSSItem(postData, siteURL) {
  const { slug, frontmatter } = postData;
  const postURL = `${siteURL}/blog/${slug}`;
  
  return `
    <item>
      <title>${escapeXML(frontmatter.title || 'Untitled')}</title>
      <link>${postURL}</link>
      <guid>${postURL}</guid>
      <pubDate>${formatRFC822Date(frontmatter.date || new Date().toISOString())}</pubDate>
      ${frontmatter.author ? `<author>${escapeXML(frontmatter.author)}</author>` : ''}
      <description>${escapeXML(frontmatter.description || '')}</description>
      ${frontmatter.tags ? 
        (typeof frontmatter.tags === 'string' 
          ? frontmatter.tags.split(',').map(tag => `<category>${escapeXML(tag.trim())}</category>`).join('\n      ')
          : Array.isArray(frontmatter.tags)
            ? frontmatter.tags.map(tag => `<category>${escapeXML(tag.trim())}</category>`).join('\n      ')
            : '')
        : ''}
    </item>`;
}

// Функция для генерации RSS-ленты
function generateRSS() {
  try {
    const postDirs = getBlogPostDirectories();
    const posts = [];
    
    // Читаем данные всех постов
    postDirs.forEach(dir => {
      try {
        const slug = dir;
        const mdPath = path.join(BLOG_DIR, dir, 'index.md');
        const content = fs.readFileSync(mdPath, 'utf-8');
        
        const { frontmatter, content: contentWithoutFrontmatter } = extractFrontmatter(content);
        
        // Пропускаем черновики
        if (frontmatter.draft === 'true' || frontmatter.draft === true) {
          return;
        }
        
        posts.push({
          slug,
          frontmatter
        });
      } catch (error) {
        console.error(`Error processing blog post ${dir}:`, error);
      }
    });
    
    // Сортируем посты по дате (новые первыми)
    posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || '');
      const dateB = new Date(b.frontmatter.date || '');
      return dateB.getTime() - dateA.getTime();
    });
    
    // Основные данные для канала RSS
    const siteURL = 'https://bmsdave.com'; // Замените на свой URL
    const siteTitle = 'Vadim Gorbachev | bmsdave';
    const siteDescription = 'Vadim Gorbachev\'s personal website and blog about programming';
    
    // Формируем элементы item для каждого поста
    const rssItems = posts.map(post => createRSSItem(post, siteURL)).join('\n');
    
    // Формируем полный XML документ
    const rssXML = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXML(siteTitle)}</title>
  <link>${siteURL}</link>
  <description>${escapeXML(siteDescription)}</description>
  <language>ru</language>
  <lastBuildDate>${formatRFC822Date(new Date().toISOString())}</lastBuildDate>
  <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
</channel>
</rss>`;
    
    // Создаем директорию, если она не существует
    const dir = path.dirname(RSS_OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Записываем файл
    fs.writeFileSync(RSS_OUTPUT_PATH, rssXML);
    console.log(`RSS feed generated at ${RSS_OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error generating RSS feed:', error);
  }
}

// Запускаем генерацию RSS
generateRSS(); 