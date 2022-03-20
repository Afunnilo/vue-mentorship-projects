<template>
  <div class="navbarSection">
    <div class="navbarContainer">
      <a class="logoContainer">
        <img src="../assets/images/logo.png" alt="logo" />
      </a>
      <nav>
        <ul class="navList">
          <li class="navItem">
            <a href="#home">Home</a>
          </li>
          <li class="navItem">
            <a href="#support">Support</a>
          </li>
          <li class="navItem">
            <a href="#feature">Feature</a>
          </li>
          <li class="navItem">
            <a href="#pricing">Pricing</a>
          </li>
          <li class="navItem">
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>
      <div class="buttons">
        <button class="loginButton">
          <img src="../assets/images/icons/lock.png" alt="" />
          <span>Login</span>
        </button>
        <button class="getStartedButton">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style>
.navbarSection {
    background: var(--creamish);
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100vw;
    box-shadow: 0px 13px 40px rgba(75, 102, 135, 0.1);
}
.navbarContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logoContainer{
    margin-right:100px;
}
.navList {
  display: flex;
}
nav{
    margin-right:100px;
}
.navItem > a {
  text-decoration: none;
  color: var(--blueish);
  font-size: 16px;
  line-height: 33px;
  cursor: pointer;
  margin:0 10px;
  font-weight: 400;
  transition: all 0.3s ease-in-out 0s;
}
.navItem > a:active {
  color: #ffc059;
}
.navItem> a:hover{
    color: #ffc059;
}
.buttons {
  display: flex;
}
.loginButton {
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
}
.loginButton > span {
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: var(--blueishtext);
}
.getStartedButton {
  width: 124px;
  height: 45px;
  font-weight: 700;
  font-size: 16px;
  line-height: 33px;
  color: #e6a740;
  background: #fff0d7;
  border:none;
  border-radius: 5px;
  margin-left:30px;
}
@media only screen and (max-width: 1024px){
  nav, .getStartedButton{
    display:none;
  }
  .navbarSection{
    background: var(--creamish);
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  }
  .navbarContainer{
    justify-content: space-around;
    padding-left:20px;
    padding-right:20px;
    padding-top:15px;
    padding-bottom:10px;
  }
}
</style>