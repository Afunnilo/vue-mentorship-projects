<template>
  <div class="mainSection" id="home">
    <div class="main">
      <div class="textSection">
        <h1>Ultimate support system for leading agencies</h1>
        <p>
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
        </p>
        <form class="mainForm">
          <div>
            <input
              class="newsletterInput"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </form>
        <div class="sponsors">
          <span> Sponsored by: </span>
          <div class="sponsorImages">
            <div>
              <img src="../../assets/images/paypal.png" alt="paypal logo" />
            </div>
            <div>
              <img src="../../assets/images/google.png" alt="google logo" />
            </div>
            <div>
              <img src="../../assets/images/dropbox.png" alt="dropbox logo" />
            </div>
          </div>
        </div>
      </div>
      <div class="illustrationSection">
        <figure>
          <img class="girl" src="../../assets/images/banner.png" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
.mainSection {
  background: var(--creamish);
  padding-bottom: 100px;
}
.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  margin-left: 155px;
  margin-right: 100px;
}
.textSection {
  margin: 0;
}
.textSection > h1 {
  font-size: 45px;
  line-height: 1.2;
  letter-spacing: -1.5px;
  color: var(--blueish);
  text-align: left !important;
}
.textSection > p {
  font-size: 18px;
  line-height: 2.33;
  color: var(--blueish);
  margin-top: 25px;
  text-align: left !important;
  margin: 0;
}
.mainForm {
  display: flex;
  margin: 30px 0 0;
}
.mainForm > div:nth-child(1) > input {
  width: 320px;
  height: 60px;
  border-radius: 5px;
  border: 0 none;
  background: var(--white);
  font-size: var(--small-text);
  line-height: 50px;
  padding-left: 25px;
  padding-right: 25px;
  margin-right: 15px;
  outline-color: var(--yellow-bg);
  box-shadow: 0px 16px 40px rgba(72, 59, 26, 0.08);
}

.mainForm > div:nth-child(2) > button {
  width: 120px;
  height: 60px;
  background: var(--yellow-bg);
  color: var(--white);
  font-weight: bold;
  border-radius: 4px;
  border: none;
  font-size: var(--small-text);
  transition: 0.3s ease-in-out 0s;

  white-space: nowrap;
}
.sponsors {
  display: flex;
  align-items: center;
  margin: 30px 0 0;
}
.sponsors > span {
  color: rgba(86, 98, 114, 0.6);
  font-size: var(--small-text);
  line-height: 2.62;
}
.sponsorImages {
  display: flex;
  align-items: center;
  margin: 0;
}
.sponsorImages > div {
  margin-left: 20px;
}

.girl {
  max-width: 540px;
}

@media only screen and (max-width: 550px) {
  .main {
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .textSection {
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  .textSection > h1 {
    font-size: 30px;
    line-height: 1.26;
    letter-spacing: 0;
  }
  .textSection > p {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 15px;
  }
  .mainForm {
    margin-top: 30px;
  }
  .mainForm > div:nth-child(1) > input {
    width: 200px;
    border: 0 none;
    font-size: 14px;
    height: 40px;
  }
  .mainForm > div:nth-child(2) > button {
    width: 100px;
    height: 40px;
    font-size: 12px;
  }
  .sponsors {
    margin-top: 30px;
  }
  .sponsors > span {
    font-size: 13px;
    line-height: 2.62;
  }
  .sponsorImages > div {
    margin-left: 10px;
  }
  .sponsorImages > div > img {
    max-width: 60px;
    height: auto;
  }
  .illustrationSection {
    margin-top: 60px;
  }
  .girl {
    width: 300px;
  }
}
@media only screen and (max-width: 1020px) {
  .main {
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .textSection {
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  .textSection > h1 {
    font-size: 30px;
    line-height: 1.26;
    letter-spacing: 0;
    text-align: center;
  }
  .textSection > p {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 15px;
    text-align: center;
  }
  .mainForm {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .mainForm > div:nth-child(1) > input {
    width: 200px;
    border: 0 none;
    font-size: 14px;
    height: 40px;
  }
  .mainForm > div:nth-child(2) > button {
    width: 100px;
    height: 40px;
    font-size: 12px;
  }
  .sponsors {
    margin-top: 30px;
    justify-content: center;
  }
  .sponsors > span {
    font-size: 13px;
    line-height: 2.62;
  }
  .sponsorImages > div {
    margin-left: 10px;
  }
  .sponsorImages > div > img {
    max-width: 60px;
    height: auto;
  }
  .illustrationSection {
    margin-top: 60px;
  }
}
</style>