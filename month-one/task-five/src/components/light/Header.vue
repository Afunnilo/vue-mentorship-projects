<template>
  <div
    class="
      header
      column
      is-half
      is-offset-one-quarter
      is-flex
      is-justify-content-space-between
      is-align-items-center
    "
  >
    <div class="is-size-4 has-text-black">devfinder</div>
    <div class="has-text-black is-size-7">
      DARK
      <router-link to='/'><i class="fa-solid fa-moon"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
button {
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
}
</style>