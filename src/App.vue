<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Summary</router-link> |
      <router-link to="/about">Skills</router-link> |
      <router-link to="/education">Education</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/hobbies">Hobbies</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
