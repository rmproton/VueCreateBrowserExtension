import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs-extra';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-and-transform-html',
      async writeBundle(options, bundle) {
        // Copy favicons
        await fs.copy('src/assets', 'dist/assets/favicons');
        
        // Find the generated CSS file
        const cssFile = Object.keys(bundle).find(fileName => fileName.endsWith('.css'));
        
        // Process and copy HTML files
        const htmlFiles = ['popup.html', 'options.html'];
        for (const file of htmlFiles) {
          let content = await fs.readFile(`public/${file}`, 'utf-8');
          // Replace script src with the correct path
          content = content.replace(
            /<script.*src=["'](.*)["'].*><\/script>/,
            `<script type="module" src="js/${file.split('.')[0]}.js"></script>`
          );
          
          if (cssFile) {
            // Add link to CSS file
            content = content.replace(
              '</head>',
              `  <link rel="stylesheet" href="${cssFile}">\n</head>`
            );
          }
          
          await fs.writeFile(`dist/${file}`, content);
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/main.js'),
        options: resolve(__dirname, 'src/options/main.js'),
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
    },
    cssCodeSplit: false, // This ensures a single CSS file is generated
    sourcemap: true,
  }
})