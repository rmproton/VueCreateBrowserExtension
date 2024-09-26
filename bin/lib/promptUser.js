const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

async function promptUser() {
  const prompt = inquirer.createPromptModule();
  return await prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'Enter the name of your app (lowercase, no special characters):',
      validate: input => {
        const sanitized = input.toLowerCase().replace(/[^a-z0-9-]/g, '');
        if (!sanitized) {
          return 'Invalid name. Please try again.';
        }
        const folderPath = path.join(process.cwd(), sanitized);
        if (fs.existsSync(folderPath)) {
          return 'A folder with this name already exists. Please choose a different name.';
        }
        return true;
      },
      filter: input => input.toLowerCase().replace(/[^a-z0-9-]/g, '')
    },
    {
      type: 'list',
      name: 'language',
      message: 'Choose your language:',
      choices: ['TypeScript', 'JavaScript'],
      filter: input => input.toLowerCase()
    },
    {
      type: 'list',
      name: 'includeRouter',
      message: 'Do you want to include Vue Router in your project?',
      choices: ['Yes', 'No'],
      filter: input => input.toLowerCase() === 'yes'
    }
  ]);
}

module.exports = { promptUser };