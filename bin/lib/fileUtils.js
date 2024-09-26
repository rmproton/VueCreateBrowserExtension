const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function updateManifest(projectDir, appName) {
  const manifestPath = path.join(projectDir, 'public', 'manifest.json');
  let manifestContent = fs.readFileSync(manifestPath, 'utf8');
  manifestContent = manifestContent.replace(/"name": "[^"]*"/, `"name": "${appName}"`);
  fs.writeFileSync(manifestPath, manifestContent);
}

async function updatePackageJson(projectDir, appName) {
  const packageJsonPath = path.join(projectDir, 'package.json');
  let packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJsonContent = packageJsonContent.replace(/"name": "[^"]*"/, `"name": "${appName}"`);
  fs.writeFileSync(packageJsonPath, packageJsonContent);
}


async function updateManifestVersion(projectDir, browser) {
  const manifestPath = path.join(projectDir, 'public', 'manifest.json');
  let manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  if (browser.toLowerCase() === 'firefox') {
    manifestContent.manifest_version = 2;
    
    // Convert action to browser_action for Firefox
    if (manifestContent.action) {
      manifestContent.browser_action = manifestContent.action;
      delete manifestContent.action;
    }

    // Convert service_worker to background scripts for Firefox
    if (manifestContent.background && manifestContent.background.service_worker) {
      manifestContent.background = {
        scripts: [manifestContent.background.service_worker]
      };
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifestContent, null, 2));
}



async function initGitRepo(projectDir) {
  process.chdir(projectDir);
  execSync('git init');
}

module.exports = { updateManifest, updatePackageJson, initGitRepo, updateManifestVersion };