<template>
  <div class='serviceSection'>
    <div class='serviceContainer'>
      <div class='box'>
        <div>
          <div class='personImageContainer'>
            <img src="../assets/images/support.png" alt="support">
          </div>
          <div class='boxText'>
            <h2>Do you need help support
              <img src="../assets/images/icons/right-arrow.png" alt="right arrow">
            </h2>
            <p>Get your website ads tests delivered at let collect sample from the victory of the update managements services.</p>
          </div>
        </div>
      </div>
       <div class='box'>
        <div>
          <div class='personImageContainer'>
             <img src="../assets/images/support.png" alt="support">
          </div>
          <div class='boxText'>
            <h2>Do you need help support
              <img src="../assets/images/icons/right-arrow.png" alt="right arrow">
            </h2>
            <p>Get your website ads tests delivered at let collect sample from the victory of the update managements services.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheService",
};
</script>

<style>
.serviceSection{
  margin: 0 auto;
  padding-bottom:70px;

}
.serviceContainer{
  display:flex;
  justify-content:center;
}
.box{
  width:540px;
  height:230px;
  background-color: var(--greyish);
  margin-left:30px;
   border-radius: 7px;
}
.box > div {
  padding:25px 25px 20px ;
  padding-right:30px;
  transition: 0.3s ease-in-out 0s;
  display:flex;
  margin:0;
}
.personImageContainer{
  margin:0;
  min-width:80px;
  margin-right:30px;
}
.boxText{
  margin-top: -15px;
}
.boxText > h2{
  font-size:20px;
  color:var(--blueish);
  line-height:1.5;
  display:flex;
  align-items: center;
  justify-content:space-between;
}
.boxText> p{
  font-size: 16px;
line-height: 2.13;
color: var(--bluegrey);
margin-top: 15px;
text-align: left;
}
.fa-arrow-right{
  color: #0F2137;
opacity: 0.3;
}
</style>