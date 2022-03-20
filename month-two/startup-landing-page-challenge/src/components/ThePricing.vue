<template>
  <div class="pricingSection" id="pricing">
    <div class="pricingContainer">
      <div class="pricingTextDiv">
        <h2>Which deal suit you perfect</h2>
        <p>Meet our pricing plan</p>
      </div>
      <div class="pricingButtonDiv">
        <div>Monthly plan</div>
        <button
          @click="togglePlan"
          class="pricingButton"
        >
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
        <div>Annual Plan</div>
      </div>
      <div v-show="showAnnual" class="pricePlanContainer">
        <div class="priceCard1">
          <div class="priceHeader">
            <h3>Startup Pack</h3>
            <p class="price">{{ startup }}</p>
            <p class="planText">
              For the startup team who work with new come data stack
            </p>
          </div>
          <ul class="planlistDiv">
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>

              <div>
                Ultimate access to all course, exercises and assessments
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>
              <div>
                Free access for all kind of exercise corrections with downloads.
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>
              <div>
                Total assessment corrections with free download access system
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid inactive fa-circle-xmark"></i>
              </div>
              <div class="inactive">
                Unlimited download of courses on the mobile app contents
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid inactive fa-circle-xmark"></i>
              </div>
              <div class="inactive">
                Download and print courses and exercises in PDF
              </div>
            </li>
          </ul>
          <div class="freeTrialDiv">
            <button class="trialBtn">Start Free Trial</button>
          </div>
        </div>
        <div class="priceCard2">
          <div class="priceHeader">
            <h3>Premium Pack</h3>
            <p  class="price">{{ premium }}</p>
            <p class="planText">
              For the Pro users who work with modern data stack
            </p>
          </div>
          <ul class="planlistDiv">
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>

              <div>
                Ultimate access to all course, exercises and assessments
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>
              <div>
                Free access for all kind of exercise corrections with downloads.
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>
              <div>
                Total assessment corrections with free download access system
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>
              <div>
                Unlimited download of courses on the mobile app contents
              </div>
            </li>
            <li class="planlistItem">
              <div class="planImage">
                <i class="fa-solid fa-1x green fa-circle-check"></i>
              </div>
              <div>Download and print courses and exercises in PDF</div>
            </li>
          </ul>
          <div class="freeTrialDiv">
            <button class="trialBtn2">Start Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePricing",
  data() {
    return {
      showAnnual: true,
      startup: "25.99/mo",
      premium: "49.99/mo",
    };
  },
  methods: {
    togglePlan() {
      this.showAnnual = !this.showAnnual;
      if (this.showAnnual === false) {
        this.startup = "301.88/mo";
        this.premium = "589.88/mo";
      } 
    },
  },
};
</script>

<style>
.pricingSection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  background: #f9fafc;
}
.pricingContainer {
}
.green {
  color: #ffc059;
}
.inactive {
  color: #343d48;

  opacity: 0.5;
}
.pricingTextDiv {
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
}
.pricingTextDiv > h2 {
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  line-height: 55px;
  letter-spacing: -1.5px;
  color: var(--blueishtext);
}
.pricingTextDiv > p {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #858b91;
}
.pricingButtonDiv {
  display: flex;
  margin: 60px auto 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
.pricingButtonDiv > div:nth-child(1) {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
  color: var(--blueishtext);
}
.pricingButtonDiv > div:nth-child(3) {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
  color: var(--blueishtext);
}
.pricingButton {
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  background: transparent;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffc059;
  transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

input:checked + .slider {
  background: #ffc059;
}

input:focus + .slider {
  box-shadow: 0px 4px 4px rgba(50, 84, 103, 0.25);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.pricePlanContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.priceCard1 {
  padding: 45px 50px 70px;
  width: 480px;
  background: var(--white);
  border-radius: 10px;
}
.priceCard2 {
  padding: 65px 60px 90px;
  margin-top: 0;
  width: 480px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0px 10px 60px rgba(62, 95, 119, 0.08);
}
.priceHeader {
  border-bottom: 1px solid #e0e2e4;
  padding-bottom: 30px;
}
.priceHeader > h3 {
  font-weight: 700;
  font-size: 22px;
  line-height: 1.31;

  letter-spacing: -0.55px;

  color: #0f2137;
}
.price {
  font-weight: 700;
  font-size: 26px;
  line-height: 1.39;
  margin-top: 10px;
  letter-spacing: -0.55px;

  color: #ffc059;
}
.planText {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #343d48;
  opacity: 0.65;
  margin-top: 20px;
}
.planlistDiv {
  border-bottom: 1px solid #e0e2e4;
  list-style: none;
  padding: 0;
  margin-top: 40px;
  padding-bottom: 40px;
  max-width: 340px;
}
.planlistItem {
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  line-height: 1.62;
  margin-bottom: 30px;
}
.planlistItem > div:nth-child(2) {
  color: #343d48;
  line-height: 26px;
}
.planImage {
  margin-right: 13px;
  margin-top: 5px;
}

.trialBtn {
  width: 163px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  border: none;
  text-align: center;
  background-color: rgba(255, 192, 89, 0.1);
  border-radius: 5px;
  color: #ffc059;
  margin-top: 40px;
  transition: 0.3s ease-in-out 0s;
}
.trialBtn2 {
  width: 163px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  border: none;
  text-align: center;
  background-color: #ffc059;
  border-radius: 5px;
  color: white;
  margin-top: 40px;
  transition: 0.3s ease-in-out 0s;
}
@media only screen and (max-width: 1024px) {
  .pricingTextDiv > h2 {
    font-size: 24px;
  }
  .pricingTextDiv > p {
    font-size: 18px;
    margin: 10px auto;
  }
  .pricePlanContainer {
    flex-direction: column;
  }
  .priceCard1 {
    width: 320px;
    padding: 40px 20px;
  }
  .priceCard2 {
    width: 320px;
    padding: 55px 20px;
    margin-top: 30px;
  }
}
</style>