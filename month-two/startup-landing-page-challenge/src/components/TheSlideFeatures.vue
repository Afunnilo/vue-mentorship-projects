<template>
  <div class="slideSection">
    <div class="slideContainer">
      <div class="tabList">
        <div class="tabItemsDiv">
          <div class="tabItem">
            <button>
              <div>
                <i class="fa-solid fa-2x fa-dollar-sign"></i>
              </div>
              <p>Budget Overview</p>
            </button>
          </div>
          <div class="tabItem">
            <button>
              <div>
                <i class="fa-solid fa-2x fa-gear"></i>
              </div>
              <p>Create & adjust</p>
            </button>
          </div>
          <div class="tabItem">
            <button>
              <div>
                <i class="fa-solid fa-2x fa-chart-pie"></i>
              </div>
              <p>View reports</p>
            </button>
          </div>
          <div class="tabItem">
            <button>
              <div>
                <i class="fa-solid fa-2x fa-briefcase"></i>
              </div>
              <p>Optimise website</p>
            </button>
          </div>
          <div class="tabItem">
            <button>
              <div>
                <i class="fa-solid fa-2x fa-arrow-up-short-wide"></i>
              </div>
              <p>Custom dashboard</p>
            </button>
          </div>
        </div>
      </div>
      <div class="tabContainer">
        <div class="tabText">
          <h2>
            {{ position }}
            quality feature that boost your website rank & performance
          </h2>
          <p>
            Build an incredible workplace and grow your business with Gusto’s
            all-in-one platform with amazing contents. Get your tests delivered
            at let home collect sample from the victory of the supplies design
            system.
          </p>
          <button>More Details</button>
        </div>
        <div class="tabImage">
          <img
            class="dashboard"
            src="../assets/images/dashboard.png"
            alt="dashboard"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSlideFeatures",
  data() {
    return {
      position: "First",
    };
  },
  
};
</script>

<style>
.slideSection {
  background: #353448;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 50px;
}
.tabItemsDiv {
  display: flex;
}
.tabItem {
  margin: 0;
}
.tabItem > button {
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tabItem > button > div > i {
  font-size: 30px;
  color: rgba(255, 255, 255, 0.3);
}
.tabItem > button > div {
  border-bottom: 2px solid grey;
  padding-bottom: 10px;
  padding-right: 150px;
  margin-right: 0px;
}
.tabItem > button > div:nth-child(5) {
  padding-right: 0px;
}
.tabItem > button > div > i:hover {
  color: #ffc059;
}
.tabItem > button > div:hover {
  border-bottom: 2px solid #ffc059;
}
.tabItem > button {
  color: #ffc059;
}

.tabItem > button > p {
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
}
.tabItem > button > p:hover {
  color: #ffc059;
}
.tabContainer {
  display: flex;
  align-items: flex-start;
}
.dashboard {
  width: 550px;
}
.tabText {
  width: 458px;
  margin-right: 100px;
}
.tabText > h2 {
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -1.5px;
  margin-bottom: 25px;
  color: #ffffff;
  text-align: left;
}
.tabText > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  text-align: left;
  margin-bottom: 60px;
  /* or 219% */

  color: #ffffff;
}
.tabText > button {
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  text-align: center;

  color: #ffffff;
  width: 163px;
  height: 60px;
  background: #ffc059;
  border-radius: 5px;
  border: none;
}
.tabImage {
  margin-top: 50px;
}
@media only screen and (max-width: 1024px) {
  .slideSection {
    flex-direction: column;
  }
  .tabItemsDiv {
    overflow-x: auto;
    margin-left: 40px;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .tabContainer {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  .dashboard {
    width: 300px;
  }
  .tabText > h2 {
    font-size: 24px;
    line-height: 1.5;
  }
  .tabText {
    width: 300px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
}
</style>