<template>
  <div id="app">
     <TheHeader/>
    <TheFooter/>
   
  </div>
</template>

<script>

import TheFooter from "./components/Footer/TheFooter.vue";
import TheHeader from "./components/Header/TheHeader.vue";
export default {
  name: "App",
  components: { TheFooter, TheHeader },
};
</script>

<style>
</style>
