<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <p>{{ description }}</p>
      <div class="button-container">
        <button @click="openOptions">Options</button>
        <button @click="toggleFeature">{{ featureEnabled ? 'Disable' : 'Enable' }} Feature</button>
      </div>
    </main>
    <footer>
      <p>Version: {{ version }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My Awesome Extension',
      description: 'Welcome to your new browser extension! This boilerplate is ready for you to customize and build upon.',
      version: '1.0.0',
      featureEnabled: false
    }
  },
  methods: {
    openOptions() {
      // Logic to open options page
      console.log('Opening options page')
    },
    toggleFeature() {
      this.featureEnabled = !this.featureEnabled
      console.log(`Feature ${this.featureEnabled ? 'enabled' : 'disabled'}`)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header {
  margin-bottom: 20px;
}

h1 {
  color: #4a90e2;
  font-size: 24px;
  margin: 0;
}

main {
  margin-bottom: 20px;
}

p {
  line-height: 1.5;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3a7bc8;
}

footer {
  font-size: 12px;
  color: #888;
  text-align: center;
}
</style>
