#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const inquirer = require('inquirer');

async function main() {
  console.log('Creating your Chrome extension project...');

  const prompt = inquirer.createPromptModule();
  const answers = await prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'Enter the name of your app (lowercase, no special characters):',
      validate: input => {
        const sanitized = input.toLowerCase().replace(/[^a-z0-9-]/g, '');
        return sanitized ? true : 'Invalid name. Please try again.';
      },
      filter: input => input.toLowerCase().replace(/[^a-z0-9-]/g, '')
    },
    {
      type: 'list',
      name: 'language',
      message: 'Choose your language:',
      choices: ['TypeScript', 'JavaScript'],
      filter: input => input.toLowerCase()
    }
  ]);

  const useTypeScript = answers.language === 'typescript';

  // Create project directory
  const projectDir = path.join(process.cwd(), answers.appName);
  fs.mkdirSync(projectDir, { recursive: true });

  // Determine source directory based on language choice
  const sourceDir = path.join(__dirname, '..', useTypeScript ? 'ts' : 'js');

  // Copy all contents from the source directory to the project directory
  fs.cpSync(sourceDir, projectDir, { recursive: true });

  // Update manifest.json
  const manifestPath = path.join(projectDir, 'manifest.json');
  let manifestContent = fs.readFileSync(manifestPath, 'utf8');
  manifestContent = manifestContent.replace(/"name": "[^"]*"/, `"name": "${answers.appName}"`);
  fs.writeFileSync(manifestPath, manifestContent);

  // Update package.json
  const packageJsonPath = path.join(projectDir, 'package.json');
  let packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJsonContent = packageJsonContent.replace(/"name": "[^"]*"/, `"name": "${answers.appName}"`);
  fs.writeFileSync(packageJsonPath, packageJsonContent);

  // Initialize git repository
  process.chdir(projectDir);
  execSync('git init');

  console.log(`Chrome extension project "${answers.appName}" created successfully!`);
  console.log('To get started, run the following commands:');
  console.log(`  cd ${answers.appName}`);
  console.log('  npm install');
  console.log('  npm run serve');
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
