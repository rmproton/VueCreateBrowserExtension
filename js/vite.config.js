import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs-extra';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-assets',
      async writeBundle() {
        // Copy favicons
        await fs.copy('src/assets', 'dist/assets/favicons');
             // Process and copy HTML files
        
        // Process and copy HTML files
        const htmlFiles = ['popup.html', 'options.html'];
        for (const file of htmlFiles) {
          let content = await fs.readFile(`public/${file}`, 'utf-8');
          // Replace script src with the correct path
          content = content.replace(
            /<script.*src=["'](.*)["'].*><\/script>/,
            `<script type="module" src="js/${file.split('.')[0]}.js"></script>`
          );
          await fs.writeFile(`dist/${file}`, content);
        }


       },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'public/popup.html'),
        options: resolve(__dirname, 'public/options.html'),
        background: resolve(__dirname, 'src/background/background.js'),
        content: resolve(__dirname, 'src/content/content.js')
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'background' ? '[name].js' : 'js/[name].js';
        },
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})