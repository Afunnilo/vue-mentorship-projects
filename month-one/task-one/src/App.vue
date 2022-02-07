<template id='main'>
  <div class="cardBody">
    <div class="cardItems">
      <div class="imageDiv">
        <img class="image" src="./assets/image-qr-code.png" alt="qr code" />
      </div>
      <div class="headerText">
        Improve your front-end skills by building projects
      </div>
      <div class="paragraphText">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");

:root {
  --white: hsl(0, 0%, 100%);
  --light-gray: hsl(212, 45%, 89%);
  --grayish-blue: hsl(220, 15%, 55%);
  --dark-blue: hsl(218, 44%, 22%);
  --font-size: 15px;
  --bold: 700;
  --normal: 400;
}

* {
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
}
body {
  background-color: var(--light-gray);
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardBody {
  width: 300px;
  height: 460px;
  background-color: var(--white);
  border-radius: 20px;
  padding: 15px;
  margin: 0 auto;
}
.image {
  width: 270px;
  height: 270px;
  border-radius: 10px;
}
.headerText {
  font-size: 20px;
  font-weight: var(--bold);
  text-align: center;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  color: var(--dark-blue);
}
.paragraphText {
  font-size: 15px;
  color: var(--grayish-blue);
  text-align: center;
  margin-top: 15px;
  margin-left: 8px;
  margin-right: 8px;
}
</style>
