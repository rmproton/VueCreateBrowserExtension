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