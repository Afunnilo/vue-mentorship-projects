<template>
  <div class="box"></div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inconsolata", monospace;
  font-size: 28px;
  border: 1px solid #c39f76;
  box-sizing: border-box;
}
.box::before {
  width: 200px;
  content: "Hello World Hello World Hello World  Hello World  Hello World  Hello World  Hello World";
  animation: farAwayEffect 12s infinite linear;
}
.box {
  perspective: 185px;
  perspective-origin: center bottom;
  overflow: hidden;
  text-align: center;
}
@keyframes farAwayEffect {
  from {
    transform: rotatex(30deg) translateY(200px) translateZ(-0.1px);
  }
  to {
    transform: rotatex(30deg) translateY(-150px) translateZ(-10px);
  }
}
</style>
