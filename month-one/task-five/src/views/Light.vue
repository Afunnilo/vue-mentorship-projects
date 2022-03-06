<template>
  <div class="light">
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from "../components/light/Header.vue";
import Search from "../components/light/Search.vue";

export default {
  name: "Light",
  components: {
    Header,
    Search,
  },
};
</script>