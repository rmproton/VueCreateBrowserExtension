const fs = require('fs');
const path = require('path');

async function setupRouter(projectDir, useTypeScript) {
  try {
    await updatePackageJsonForRouter(projectDir);
    await updateMainFileForRouter(projectDir, useTypeScript, 'popup');
    await updateMainFileForRouter(projectDir, useTypeScript, 'options');
    await updateAppVueForRouter(projectDir, 'popup');
    await updateAppVueForRouter(projectDir, 'options');
  } catch (error) {
    console.error('Error setting up router:', error.message);
    console.log('Skipping router setup.');
  }
}

async function updatePackageJsonForRouter(projectDir) {
  try {
    const packageJsonPath = path.join(projectDir, 'package.json');
    let packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
    const routerDependency = '"vue-router": "^4.0.0"';
    packageJsonContent = packageJsonContent.replace(
      /"dependencies": {/,
      `"dependencies": {\n    ${routerDependency},`
    );
    fs.writeFileSync(packageJsonPath, packageJsonContent);
    console.log('\nUpdated package.json with vue-router dependency');
  } catch (error) {
    console.error('Error updating package.json:', error.message);
  }
}

async function updateMainFileForRouter(projectDir, useTypeScript, folder) {
  try {
    const mainFilePath = path.join(projectDir, 'src', folder, useTypeScript ? 'main.ts' : 'main.js');
    let mainFileContent = fs.readFileSync(mainFilePath, 'utf8');
    mainFileContent = `import { createRouter, createWebHashHistory } from 'vue-router'\n${mainFileContent}`;
    mainFileContent = mainFileContent.replace(
      'createApp(App)',
      'const router = createRouter({\n  history: createWebHashHistory(),\n  routes: []\n})\n\ncreateApp(App).use(router)'
    );
    fs.writeFileSync(mainFilePath, mainFileContent);
    console.log(`Updated main file for router: ${mainFilePath}`);
  } catch (error) {
    console.error(`Error updating ${folder} main file:`, error.message);
  }
}

async function updateAppVueForRouter(projectDir, folder) {
  try {
    const appVuePath = path.join(projectDir, 'src', folder, 'App.vue');
    let appVueContent = fs.readFileSync(appVuePath, 'utf8');
    appVueContent = appVueContent.replace(
      '<template>',
      '<template>\n  <router-view></router-view>'
    );
    fs.writeFileSync(appVuePath, appVueContent);
    console.log(`Updated ${folder}/App.vue with router-view`);
  } catch (error) {
    console.error(`Error updating ${folder}/App.vue:`, error.message);
  }
}

module.exports = { setupRouter };