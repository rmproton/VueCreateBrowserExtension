#!/usr/bin/env node

const { promptUser } = require('./lib/promptUser');
const { setupProject } = require('./lib/projectSetup');
 const { setupRouter } = require('./lib/routerSetup');
const { updateManifest, updatePackageJson, initGitRepo } = require('./lib/fileUtils');
const packageJson = require('../package.json');

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

  console.log('\x1b[32m%s\x1b[0m',`\nChrome extension project "${answers.appName}" created successfully!`);
  console.log('\nTo get started, run the following commands:');
  console.log(`  cd ${answers.appName}`);
  console.log('  npm install');
  console.log('  npm run serve\n');
}

 
main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});