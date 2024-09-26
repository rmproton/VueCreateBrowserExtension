# VueCreateBrowserExtension

VueCreateBrowserExtension is a powerful CLI tool that helps you quickly set up a new browser extension project using Vue 3 and Vite. It offers a streamlined development experience with the option to choose between JavaScript and TypeScript, as well as the choice to create an extension for either Firefox or Chrome.


## Getting Started

To create a new browser extension project with Vue 3, run the following command:

- npx vue-create-browser-extension
 
or do

- npm i vue-create-browser-extension -g
- vue-create-browser-extension start
 


## Features

- Quick project setup for Chrome or Firefox extensions
- Vue 3 integration for building reactive user interfaces with improved performance
- Composition API support for better code organization and reusability
- Vite for fast development and optimized builds
- Choice between JavaScript and TypeScript
- Choice between creating a Chrome or Firefox extension
- Pre-configured development environment optimized for Vue 3



## Generated Project Architecture
### TypeScript

```
project-root/
├── src/
│   ├── background/
│   │   └── background.ts
│   ├── content/
│   │   └── content.ts
│   ├── options/
│   │   └── options.ts
│   └── popup/
│   │    └── popup.ts
│   └── assets/
│       ├── favicon-16x16.png
│       └── favicon-32x32.png
├── public/
│   └── popup.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── env.d.ts
├── manifest.json
└── vite.config.ts
```

### JavaScript

```
project-root/
├── src/
│   ├── background/
│   │   └── background.js
│   ├── content/
│   │   └── content.js
│   ├── options/
│   │   └── options.js
│   └── popup/
│   │    └── popup.js
│   └── assets/
│       ├── favicon-16x16.png
│       └── favicon-32x32.png
├── public/
│   └── popup.html
├── package.json
├── package-lock.json
├── manifest.json
├── jsconfig.json
└── vite.config.js
```
 

