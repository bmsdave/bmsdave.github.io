import { defineConfig } from 'vite';
import { plugin as markdown } from 'vite-plugin-markdown';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    markdown({
      // Options for the markdown plugin
      mode: ['html', 'toc'],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'content',
          dest: '.'
        },
        {
          src: 'node_modules/github-markdown-css/github-markdown-light.css',
          dest: '.',
          rename: 'github-markdown.css'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Copy the github-markdown-css to the output directory
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'github-markdown-light.css') {
            return 'assets/css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  // Serve the content directory as static files
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  }
});
