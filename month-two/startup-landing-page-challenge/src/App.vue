<template>
  <div id="app">
    <TheNavbar />
    <TheHeader />
    <TheService />
    <TheFeatures />
    <TheBenefits />
    <ThePricing />
    <TheTestimonials />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheHeader from "./components/Header/TheHeader.vue";
import TheService from "./components/TheService.vue";
import TheFeatures from "./components/TheFeatures.vue";
import TheBenefits from "./components/TheBenefits.vue";
import TheTestimonials from "./components/TheTestimonials.vue";
import ThePricing from "./components/ThePricing.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
    TheHeader,
    TheService,
    TheFeatures,
    TheBenefits,
    TheTestimonials,
    ThePricing,
  },
};
</script>

<style>
</style>
