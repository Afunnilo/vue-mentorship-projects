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
    <div class="is-size-4 has-text-white">devfinder</div>
    <div class="has-text-white is-size-7">
      LIGHT
      <button><i class="fa-solid fa-sun"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
</style>