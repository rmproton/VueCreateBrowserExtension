const fs = require('fs');
const path = require('path');

function setupProject(answers) {
  const useTypeScript = answers.language === 'typescript';
  
  // Create project directory
  const projectDir = path.join(process.cwd(), answers.appName);
  fs.mkdirSync(projectDir, { recursive: true });

  // Determine source directory based on language choice
  const sourceDir = path.join(__dirname, '../..', useTypeScript ? 'ts' : 'js');

  // Copy all contents from the source directory to the project directory
  fs.cpSync(sourceDir, projectDir, { recursive: true });

  return projectDir;
}

module.exports = { setupProject };