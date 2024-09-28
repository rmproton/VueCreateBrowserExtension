## Development Commands

### Development

- **Start Development Server**: This command will start the development server and open the `popup.html` file in your default browser.
  ```sh
  npm run dev
  ```
 

### Build

- **Build for Production**: This command will build the project for production.
  ```sh
  npm run build
  ```

- **Preview Production Build**: This command will preview the production build.
  ```sh
  npm run preview
  ```


  ## Folder Structure and Architecture

  The generated folder is structured to maintain a clear separation of concerns and facilitate easy navigation and maintenance of the project. Here's an overview of the folder structure and its components:
    - **/public**: Contains publicly accessible files for the extension
      - **manifest.json**: Defines extension metadata, permissions, and functionality
      - **popup.html**: HTML for the popup when clicking the extension icon
      - **options.html**: HTML for customizing extension settings

    - **/src**: Contains the extension's source code
      - **/popup**: JavaScript files for the popup functionality
        - **main.js**: Main entry point for popup JavaScript
        - **popup.vue**: Vue component for popup structure and behavior
      - **/options**: JavaScript files for the options page
        - **main.js**: Main entry point for options page JavaScript
        - **options.vue**: Vue component for options page structure and behavior
      - **/background**: JavaScript files for background functionality
        - **background.js**: Main entry point for background script
      - **/assets**: Static assets (images, icons, etc.)

    - **/dist**: (Created on `npm run build`) Distribution-ready files

    - **/node_modules**: (Created on `npm install`) Project dependencies

    - **readme.md**: Project overview, structure, and development commands
    - **package.json**: Project metadata, dependencies, and management scripts
    - **vite.config.js**: Vite build process configuration

  This structure allows for a clear separation of concerns between the public-facing assets, the source code, and the distribution-ready files. It also makes it easy to manage and maintain the project's dependencies.





