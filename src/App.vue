<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Jost", sans-serif;
  font-family: "DM Serif Display", serif;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

a {
  text-decoration: none;
}
</style>
