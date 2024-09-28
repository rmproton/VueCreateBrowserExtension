![Alt text](https://i.ibb.co/vLL1Vd2/Untitled-1.png)

VueCreateBrowserExtension is a powerful CLI tool designed to streamline the process of setting up a new browser extension project. Here's what it offers:

- Quick setup using Vue 3 and Vite
- Streamlined development experience
- Choice between JavaScript and TypeScript
- Flexibility to create extensions for:
  - Firefox (using Manifest V2)
  - Any Chromium-based browsers (using Manifest V3) such as: 
    - Google Chrome
    - Microsoft Edge
    - Opera
    - Brave
    - Vivaldi

This allows developers to target their preferred browser ecosystem based on the chosen manifest version, providing a versatile solution for browser extension development.


## Getting Started

To create a new browser extension project with Vue 3, run the following command:

- npm i vue-create-browser-extension
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
│   │   ├── Options.vue
│   │   └── main.ts
│   └── popup/
│   │    ├── Popup.vue
│   │    └── main.ts
│   └── assets/
│       ├── favicon-16x16.png
│       └── favicon-32x32.png
├── public/
│   ├── manifest.json
│   ├── options.html
│   └── popup.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── env.d.ts
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
│   │   ├── Options.vue
│   │   └── main.js
│   └── popup/
│   │    ├── Popup.vue
│   │    └── main.js
│   └── assets/
│       ├── favicon-16x16.png
│       └── favicon-32x32.png
├── public/
│   ├── manifest.json
│   ├── options.html
│   └── popup.html
├── package.json
├── package-lock.json
├── readme.md
└── vite.config.js
```
 

