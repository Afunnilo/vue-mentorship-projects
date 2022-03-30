<template>
  <div class="featuresSection" id="feature">
    <div class="featuresContainer">
      <div class="messengerContainer">
        <img class="chat" src="../assets/images/messenger.png" alt="" />
      </div>
      <div>
        <div class="featureText">
          <h2>
            <span> Meet our premium features that will make you wow </span>
            <img
              class="emoji"
              src="../assets/images/icons/emoji-2.png"
              alt="shocked emoji face"
            />
          </h2>
          <p>
            Build an incredible workplace and grow your business with Gusto’s
            all-in-one platform with amazing contents.
          </p>
        </div>
        <div class="accordionContainer">
          <div
            v-bind:class="[isOpen ? 'accordionItem2' : 'accordionItem']"
            @click="toggleAccordion"
          >
            <div class="accordionTitle">
              <h3>Organize your project content</h3>
              <div>
                <img
                  v-show="!isOpen"
                  src="../assets/images/icons/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div
              v-show="isOpen"
              v-bind:class="[isOpen ? 'accordionItem2' : 'showNothing']"
            >
              <div>
                Get your website ads tests delivered at let collect sample from
                the victory of the managments that supplies best design system
                which guidelines ever with multiple features.
              </div>
            </div>
          </div>
          <div
            v-bind:class="[isOpen2 ? 'accordionItem2' : 'accordionItem']"
            @click="toggleAccordion2"
          >
            <div class="accordionTitle">
              <h3>Collaborate your documents easily</h3>
              <div>
                <img
                  v-show="!isOpen2"
                  src="../assets/images/icons/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div
              v-show="isOpen2"
              v-bind:class="[isOpen2 ? 'accordionItem2' : 'showNothing']"
            >
              <div>
                Get your blood tests delivered at let collect sample from the
                victory of the managements that supplies best design system
                guidelines ever.
              </div>
            </div>
          </div>
          <div
            v-bind:class="[isOpen3 ? 'accordionItem2' : 'accordionItem']"
            @click="toggleAccordion3"
          >
            <div class="accordionTitle">
              <h3>Build your team's knowledge base</h3>
              <div>
                <img
                  v-show="!isOpen3"
                  src="../assets/images/icons/right-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div
              v-show="isOpen3"
              v-bind:class="[isOpen3 ? 'accordionItem2' : 'showNothing']"
            >
              <div>
                Get your blood tests delivered at let collect sample from the
                victory of the managements that supplies best design system
                guidelines ever.
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFeatures",
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      isOpen3: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
      if (this.isOpen2 || this.isOpen3) {
        this.isOpen2 = false;
        this.isOpen3 = false;
      }
    },
    toggleAccordion2() {
      this.isOpen2 = !this.isOpen2;
      if (this.isOpen || this.isOpen3) {
        this.isOpen = false;
        this.isOpen3 = false;
      }
    },
    toggleAccordion3() {
      this.isOpen3 = !this.isOpen3;
      if (this.isOpen || this.isOpen2) {
        this.isOpen = false;
        this.isOpen2 = false;
      }
    },
  },
};
</script>

<style>
.featuresSection {
  padding-top: 150px;
   display: flex;
  justify-content: center;
}
.featuresContainer {
  display: flex;
  justify-content: center;
}
.featureText {
  text-align: left;
  max-width: 660px;
}
.featureText > h2 {
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -1.5;
  color: var(--blueishtext);
}
.featureText > p {
  font-size: var(--smallText);
  line-height: 35px;
  color: var(--blueishtext);
  width: 478px;
}
.accordionItem {
  width: 550px;
  background: var(--greyish);
  padding-left: 20px;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;

}
.accordionTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 30px;
}
.accordionTitle > h3 {
  font-size: var(--small-text);
  letter-spacing: -0.5;
  color: var(--blueishtext);
}
.chat {
  height: 500px;
}
.accordionItem2 {
  width: 520px;
  margin-left: 20px;
  margin-right: 30px;
  background-color: var(--white);
  transition: 0.31s ease-in-out 0s;
  cursor: pointer;
  box-shadow: 0px 9px 30px rgb(69 88 157 / 8%);
}
.accordionItem2 > div {
  font-size: var(--small-text);
  line-height: 2;
  overflow: hidden;
  background-color: var(--white);
  color: var(--bluegrey);
  border: none;
  text-align: left;
  width: 520px;
  margin-right:10px;
  box-shadow: 0px 9px 30px rgb(69 88 157 / 8%);
  
}
@media only screen and (max-width: 1024px) {
  .featuresSection {
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
  .featuresContainer {
    flex-direction: column;
    justify-content: center;
  }
  .chat {
    height: 320px;
    width: 320px;
  }
  .messengerContainer {
    display: flex;
    justify-content: center;
  }
  .featureText {
    width: 320px;
  }
  .featureText > h2 {
    font-size: 24px;
  }
  .featureText > p {
    font-size: 14px;
    width: 300px;
  }
  .emoji {
    width: 16px;
  }

  .accordionContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .accordionItem,
  .accordionItem2 {
    width: 320px;
  }
  .accordionItem2 > div {
    width: 320px;
    font-size: 14px;
  }
  .accordionItem2 {
    margin-left: 5px;
    margin-right: 10px;
  }
  .accordionTitle > h3 {
    font-size: 14px;
  }
  .accordionTitle > div > img {
    width: 20px;
  }
  .accordionTitle {
    margin-left: 5px;
    margin-right: 10px;
  }
}
</style>