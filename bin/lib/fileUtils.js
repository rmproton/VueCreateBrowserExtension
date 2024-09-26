const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function updateManifest(projectDir, appName) {
  const manifestPath = path.join(projectDir, 'manifest.json');
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

async function initGitRepo(projectDir) {
  process.chdir(projectDir);
  execSync('git init');
}

module.exports = { updateManifest, updatePackageJson, initGitRepo };