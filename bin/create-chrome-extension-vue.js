#!/usr/bin/env node

const { promptUser } = require('./lib/promptUser');
const { setupProject } = require('./lib/projectSetup');
 const { setupRouter } = require('./lib/routerSetup');
const { updateManifest, updateManifestVersion, updatePackageJson, initGitRepo } = require('./lib/fileUtils');
const packageJson = require('../package.json');
const { execSync } = require('child_process');

async function main() {
   
  console.log( '\x1b[32m%s\x1b[0m', '\ncreate-chrome-extension-vue:'  + "version: " + packageJson.version);
  console.log('Creating your Chrome extension project...\n');

  const answers = await promptUser();
  const projectDir = await setupProject(answers);
  
  if (answers.includeRouter) {
    await setupRouter(projectDir, answers.language === 'typescript');
  }

  await updateManifest(projectDir, answers.appName);
  await updatePackageJson(projectDir, answers.appName);
  await initGitRepo(projectDir);
  await updateManifestVersion(projectDir, answers.browser);

  console.log('\x1b[32m%s\x1b[0m',`\nChrome extension project "${answers.appName}" created successfully!\n`);
  console.log("Now installing dependencies")
  process.chdir(projectDir);
  execSync('npm install', { stdio: 'inherit' });
  console.log('\nTo get started, run the following commands:');
  console.log(`  cd ${answers.appName}`);

  console.log('  npm run serve\n');
}

 
main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});