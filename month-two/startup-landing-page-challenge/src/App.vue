<template>
  <div id="app">
     <TheHeader/>
     <TheService/>
     <TheFeatures/>
     <TheBenefits/>
    <TheFooter/>
    
   
  </div>
</template>

<script>

import TheFooter from "./components/Footer/TheFooter.vue";
import TheHeader from "./components/Header/TheHeader.vue";
import TheService from "./components/TheService.vue";
import TheFeatures from "./components/TheFeatures.vue"
import TheBenefits from "./components/TheBenefits.vue"
export default {
  name: "App",
  components: { TheFooter, TheHeader, TheService, TheFeatures, TheBenefits },
};
</script>

<style>
</style>
