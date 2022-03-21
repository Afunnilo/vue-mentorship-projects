<template>
  <div class="benefitsSection">
    <div class="benefitsContainer">
      <div class="benefitsText">
        <div class="c">
          <h2>
            <span>
              Built in one app to make instant reply with in lowest minutes
            </span>
            <img
              class="emoji"
              src="../assets/images/icons/emoji.png"
              alt="angel emoji face"
            />
          </h2>
          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
          </p>
        </div>
        <div class="benefitsList">
          <div class="benefitsListItems">
            <div>
              <img src="../assets/images/icons/check-circle.png" alt="" />
              <span> Medical and vision </span>
            </div>
            <div>
              <img src="../assets/images/icons/check-circle.png" alt="" />
              <span> Life insurance </span>
            </div>
            <div>
              <img src="../assets/images/icons/check-circle.png" alt="" />
              <span> 400(k) savings </span>
            </div>
          </div>
          <div class="benefitsListItems">
            <div>
              <img src="../assets/images/icons/check-circle.png" alt="" />
              <span> HSAs and FSAs </span>
            </div>
            <div>
              <img src="../assets/images/icons/check-circle.png" alt="" />
              <span> Commuter benefits </span>
            </div>
            <div>
              <img src="../assets/images/icons/check-circle.png" alt="" />
              <span> 529 college savings </span>
            </div>
          </div>
        </div>
        <a class="explore">
          Explore more <i class="fa-solid fa-angle-right"></i>
        </a>
      </div>
      <div class="chatContainer">
        <img class="chatapp" src="../assets/images/app.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBenefits",
};
</script>

<style>
.benefitsSection {
  max-width: 1260px;
  margin-top: 87px;
  margin-right: 30px;
  margin-left: 80px;
}
.benefitsContainer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.benefitsText {
  text-align: left;
  max-width: 495px;
}
.benefitsHeaderText > h2 > span {
  font-size: 40px;
  line-height: 1.26;
  letter-spacing: -1.5;
  color: #0f2137;
}
.benefitsHeaderText > p {
  font-size: var(--smallText);
  line-height: 2.2;
  color: #0f2137;
  width: 478px;
}
.chatapp {
  width: 590px;
}
.benefitsList {
  display: flex;
}
.benefitsListItems {
  margin-right: 30px;
}
.benefitsListItems > div {
  display: flex;
  align-items: center;
}
.benefitsListItems > div > img {
  margin-right: 10px;
}
.benefitsListItems > div > span {
  font-size: var(--small-font);
  color: var(--blueish);
  line-height: 45px;
}
.explore {
  font-weight: 500;
  font-size: 16px;
  line-height: 42px;
  color: #3183ff;
  display: flex;
  align-items: center;
  margin-top: 25px;
}
.explore > i {
  margin-left: 5px;
}
@media only screen and (max-width: 1024px) {
  .benefitsSection {
    margin: 0;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  .benefitsContainer {
    flex-direction: column-reverse;
    align-items: center;
  }
  .benefitsHeaderText {
    margin: 0 auto 30px;
    text-align: center;
    margin-bottom: 20px;
    margin-left: 0;
  }
  .benefitsHeaderText > h2 {
    font-size: 24px;
  }
  .benefitsHeaderText > p {
    font-size: 14px;
    line-height: 1.86;
  }
  .chatapp {
    height: 400px;
    width: 300px;
  }
  .benefitsText {
    width: 300px;
    text-align: center;
  }
  .benefitsList {
    flex-direction: column;
  }
}
</style>