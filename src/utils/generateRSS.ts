import fs from 'fs';
import path from 'path';
import { loadAllBlogPosts, BlogPost } from '../blog/blogLoader';

/**
 * Форматирует дату в формат RFC 822, который требуется для RSS
 */
function formatRFC822Date(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toUTCString();
  } catch (e) {
    return new Date().toUTCString();
  }
}

/**
 * Экранирует специальные символы XML
 */
function escapeXML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Создает элемент <item> для RSS на основе поста
 */
function createRSSItem(post: BlogPost, siteURL: string): string {
  const postURL = `${siteURL}/blog/${post.slug}`;
  
  // Извлекаем текст поста без HTML тегов для description
  const description = post.excerpt 
    ? escapeXML(post.excerpt) 
    : escapeXML(post.content.replace(/<[^>]*>/g, '').substring(0, 280)) + '...';
  
  return `
    <item>
      <title>${escapeXML(post.title)}</title>
      <link>${postURL}</link>
      <guid>${postURL}</guid>
      <pubDate>${formatRFC822Date(post.date)}</pubDate>
      ${post.author ? `<author>${escapeXML(post.author)}</author>` : ''}
      <description>${description}</description>
      ${post.tags && post.tags.length > 0 
        ? post.tags.map(tag => `<category>${escapeXML(tag)}</category>`).join('\n      ') 
        : ''}
    </item>`;
}

/**
 * Генерирует RSS-ленту на основе постов блога
 */
export async function generateRSS(outputPath: string = 'public/rss.xml'): Promise<void> {
  try {
    const posts = await loadAllBlogPosts();
    
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
    
    // Записываем файл
    fs.writeFileSync(outputPath, rssXML);
    console.log(`RSS feed generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating RSS feed:', error);
  }
}

// Если скрипт запущен напрямую, а не импортирован как модуль
if (require.main === module) {
  generateRSS();
} 