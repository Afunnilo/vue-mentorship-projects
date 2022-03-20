<template>
  <div>
    <TheNewsletter />
    <TheBottom />
  </div>
</template>

<script>
import TheBottom from "./TheBottom.vue";
import TheNewsletter from "./TheNewsletter.vue";
export default {
  name: "TheFooter",
  components: {
    TheBottom,
    TheNewsletter,
  },
};
</script>

<style>
</style>