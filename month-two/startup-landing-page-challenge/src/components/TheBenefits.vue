<template>
  <div class="benefitsSection">
    <div class="benefitsContainer">
      <div class="benefitsText">
        <div class="benefitsHeaderText">
          <h2>
            <span>
              Built in one app to make instant reply with in lowest minutes
            </span>
            <img
              src="../assets/images/icons/emoji.png"
              alt="angel emoji face"
            />
          </h2>
          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
          </p>
        </div>
        <div class='benefitsList'>
            <div class='benefitsListItems'>
                <div>
              <img src="../assets/images/icons/check-circle.png" alt="">
              <span>
                  Medical and vision
              </span>
          </div>
          <div>
              <img src="../assets/images/icons/check-circle.png" alt="">
              <span>
                 Life insurance
              </span>
          </div>
          <div>
              <img src="../assets/images/icons/check-circle.png" alt="">
              <span>
                  400(k) savings
              </span>
          </div>
            </div>
            <div class='benefitsListItems'>
                <div>
              <img src="../assets/images/icons/check-circle.png" alt="">
              <span>
                 HSAs and FSAs
              </span>
          </div>
          <div>
              <img src="../assets/images/icons/check-circle.png" alt="">
              <span>
                  Commuter benefits
              </span>
          </div>
          <div>
              <img src="../assets/images/icons/check-circle.png" alt="">
              <span>
                  529 college savings
              </span>
          </div>
            </div>
          
          
        </div>
        <a> </a>
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
.benefitsHeaderText > h2 {
  font-size: 40px;
  line-height: 1.26;
  letter-spacing: -1.5;
  color: var(--blueishtext);
}
.benefitsHeaderText > p {
  font-size: var(--smallText);
  line-height: 2.2;
  color: var(--blueishtext);
  width: 478px;
}
.chatapp {
  width: 590px;
}
.benefitsList {
display:flex;

}
.benefitsListItems{
    margin-right:30px;
}
.benefitsListItems > div {
    display:flex;
    align-items:center;
}
.benefitsListItems > div > img{
    margin-right:10px;
}
.benefitsListItems > div > span{
    font-size: var(--small-font);
    color:var(--blueish);
    line-height:45px;
}

</style>