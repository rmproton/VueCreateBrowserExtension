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
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
  build: {
    lib: {
      entry: '',
      formats: ['es']
    },
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/main.ts'),
        options: resolve(__dirname, 'src/options/main.ts'),
        background: resolve(__dirname, 'src/background/background.ts'),
        content: resolve(__dirname, 'src/content/content.ts')
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
