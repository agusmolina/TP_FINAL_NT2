<template>

<body>
  <div id="app">
    <router-view/>
  </div>
</body>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body { 
  background: url(https://cdn.24.co.za/files/Cms/General/d/8033/07653b2c234b4b538c23909d7fd70011.jpg) 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
