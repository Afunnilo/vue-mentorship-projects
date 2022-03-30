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
          <img
            class="loginImage"
            src="../assets/images/icons/lock.png"
            alt=""
          />
          <span>Login</span>
        </button>
        <button class="getStartedButton">Get Started</button>
      </div>
      <div id="menuToggle">
        <input @click="toggleHam" type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <div v-show="showHam" id="menu">
          <div>
            <ul>
              <a @click="toggleHam" href="#home"><li>Home</li></a>
              <a @click="toggleHam" href="#support"><li>Support</li></a>
              <a @click="toggleHam" href="#feature"><li>Feature</li></a>
              <a @click="toggleHam" href="#pricing"><li>Pricing</li></a>
              <a @click="toggleHam" href="#testimonials"
                ><li>Testimonials</li></a
              >
            </ul>
          </div>
          <div class="donatebtndiv">
            <button class="donatebtn">Donate now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      showHam: false,
    };
  },
  methods: {
    toggleHam() {
      this.showHam = !this.showHam;
    },
  },
};
</script>

<style>
#menuToggle {
  display: none;
}
.navbarSection {
  background: var(--creamish);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  width: 100vw;
  box-shadow: 0px 13px 40px rgba(75, 102, 135, 0.1);
}
.navbarContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logoContainer {
  margin-right: 100px;
}
.navList {
  display: flex;
}
nav {
  margin-right: 100px;
}
.navItem > a {
  text-decoration: none;
  color: var(--blueish);
  font-size: 16px;
  line-height: 33px;
  cursor: pointer;
  margin: 0 10px;
  font-weight: 400;
  transition: all 0.3s ease-in-out 0s;
}
.navItem > a:active {
  color: #ffc059;
}
.navItem > a:hover {
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
  border: none;
  border-radius: 5px;
  margin-left: 30px;
}
@media only screen and (max-width: 1024px) {
  .navList,
  .getStartedButton {
    display: none;
  }
  .burgerbtn {
    background: transparent;
    border: none;
  }
  nav {
    margin: 0;
  }
  .logoContainer {
    margin-right: 100px;
    margin-left: 0;
  }
  .buttons {
    margin: 0;
  }
  .navbarSection {
    background: var(--creamish);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    justify-content: space-around;
    align-items: center;
  }
  .navbarContainer {
    justify-content: evenly;
    height: 70px;
    align-items: center;
  }
  .logoContainer > img {
    height: 25px;
  }
  .loginButton > span {
    font-size: 14px;
  }
  .loginButton {
    margin-right: 10px;
  }
  .loginImage {
    height: 14px;
  }

  #menuToggle {
    display: block;
    position: relative;
    top: 0px;
    left: 10px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }
  ul a li:hover {
    color: var(--yellow-bg);
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #000;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  #menu {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 50px;
    height: 100vh;
    background: #fff;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu ul {
    padding-top: 100px;
  }
  #menu li {
    padding: 10px 0;
    font-size: 16px;
    color: var(--bluegrey);
    border-bottom: 1px solid var(--greyish);
  }
  .donatebtndiv {
    display: flex;
    justify-content: center;
    margin-top: 280px;
  }
  .donatebtn {
    height: 30px;
    width: 150px;
    border: none;
    background: var(--yellow-bg);
    color: #fff;
    font-size: 16px;
    text-align: center;
    border-radius: 7px;
  }
  .donatebtn:hover {
    background: var(--blueish);
    border: none;
  }
}
</style>