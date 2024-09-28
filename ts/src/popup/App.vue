<template >
  <div>
    <!-- 
      Note: Everything in this template is purely placeholder content.
      Feel free to remove or modify all elements as needed for your specific extension.
    -->
    <header>
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <small>Version: {{ version }}</small>
      </div>
    </header>
    <main>
      <p>{{ description }}</p>
      <div class="button-container">
        <button @click="openOptions">Options page</button>
      </div>
    </main>
   
  </div>
</template>

<script lang="ts">
export default {
  name: 'PopupView',
  data(): { description: string; version: string } { // Specify the return type
    return {
      description: 'Welcome to your new browser extension! This boilerplate is ready for you to customize and build upon.',
      version: '1.0.0'
    }
  },
  methods: {
    // placeholder function remove if not needed 
    openOptions() {
      if (window.location.hostname === 'localhost') {
        window.open('/options.html', '_blank'); // Open in a new tab
      } else {
        chrome.runtime.openOptionsPage();
      }
    }
  }
}
</script>

<style>
body, html {
  width: 400px;
  height: 300px;
  margin: 0;
  border: solid 1px #eee;
  padding: 0;
  display: flex;
  overflow: hidden;
}

#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 400px;
  width: 100%;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

header {
  margin-bottom: 24px;
}

h1 {
  color: #2c3e50;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
}

main {
  margin-bottom: 24px;
}

p {
  line-height: 1.6;
  color: #4a4a4a;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 14px;
}

button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

footer {
  font-size: 12px;
  color: #7f8c8d;
  text-align: center;
}

.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.logo { 
  width: 300px;
} 
</style>
