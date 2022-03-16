<template>
  <div class="featuresSection">
    <div class="featuresContainer">
      <div class="messengerContainer">
        <img class="chat" src="../assets/images/messenger.png" alt="" />
      </div>
      <div>
        <div class="featureText">
          <h2>
            <span> Meet our premium features that will make you wow </span>
            <img
              src="../assets/images/icons/emoji-2.png"
              alt="shocked emoji face"
            />
          </h2>
          <p>
            Build an incredible workplace and grow your business with Gusto’s
            all-in-one platform with amazing contents.
          </p>
        </div>
        <div class='accordionContainer'>
          <div v-bind:class="[isOpen ? 'accordionItem2' : 'accordionItem']"  @click='toggleAccordion'>
            <div class='accordionTitle'>
              <h3>Organize your project content</h3>
              <div>
                <img v-show='!isOpen' src="../assets/images/icons/right-arrow.png" alt="">
              </div>
              
            </div>
            <div v-show='isOpen' v-bind:class="[isOpen ? 'accordionItem2' : 'showNothing']" >
              <div>
                Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.
              </div>
            </div>

          </div>
          <div v-bind:class="[isOpen2 ? 'accordionItem2' : 'accordionItem']"  @click='toggleAccordion2'>
            <div class='accordionTitle'>
              <h3>Collaborate your multiple team support easily</h3>
              <div>
                <img v-show='!isOpen2' src="../assets/images/icons/right-arrow.png" alt="">
              </div>
              
            </div>
            <div v-show='isOpen2' v-bind:class="[isOpen2 ? 'accordionItem2' : 'showNothing']" >
              <div>
                Get your blood tests delivered at let collect sample from the victory of the managements that supplies best design system guidelines ever.
              </div>
            </div>

          </div>
          <div v-bind:class="[isOpen3 ? 'accordionItem2' : 'accordionItem']"  @click='toggleAccordion3'>
            <div class='accordionTitle'>
              <h3>Build your team's knowledge base</h3>
              <div>
                <img v-show='!isOpen3' src="../assets/images/icons/right-arrow.png" alt="">
              </div>
              
            </div>
            <div v-show='isOpen3' v-bind:class="[isOpen3 ? 'accordionItem2' : 'showNothing']" >
              <div>
               Get your blood tests delivered at let collect sample from the victory of the managements that supplies best design system guidelines ever.
              </div>
            </div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFeatures",
  data(){
    return{
      isOpen:false,
      isOpen2:false,
      isOpen3:false
    }
  },
  methods:{
    toggleAccordion () {
      this.isOpen = !this.isOpen
      if (this.isOpen2 || this.isOpen3){
        this.isOpen2 = false
        this.isOpen3 = false
      }
    },
    toggleAccordion2 () {
      this.isOpen2 = !this.isOpen2
      if (this.isOpen || this.isOpen3){
        this.isOpen = false
        this.isOpen3 = false
      }
    },
    toggleAccordion3 () {
      this.isOpen3 = !this.isOpen3
      this.isOpen2 = !this.isOpen2
      if (this.isOpen || this.isOpen2){
        this.isOpen = false
        this.isOpen2 = false
      }
    }
  }
};
</script>

<style>
.featuresSection {
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
.accordionItem{
  width:550px;
  background:var(--greyish);
  padding-left: 20px;
  border-radius:10px; 
  margin-top:15px;
}
.accordionTitle{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-left:20px;
  margin-right:30px;
}
.accordionTitle > h3{
  font-size:var(--small-text);
  letter-spacing:-0.5;
  color:var(--blueishtext);
}
.chat {
  height: 500px;
}
.accordionItem2{
  width:550px;
  margin-left:20px;
  margin-right:30px;
  background-color: var(--white);
  transition: 0.3s ease-in-out 0s;
}
.accordionItem2 >div{
  font-size:var(--small-text);
  line-height:2;
  overflow:hidden;
  background-color: var(--white);
  color:var(--bluegrey);
  border:none;
  text-align:left;
  width:500px;

}
</style>