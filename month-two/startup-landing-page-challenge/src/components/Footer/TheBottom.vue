<template>
<section class='bottomSection'>
  <div>
<div class="bottom">
    <div>
      <div class="logoAndText">
        <div>
          <img src="../../assets/images/logo-white.png" alt="" />
        </div>
      </div>
      <div class="copyright">&copy; Copyright by 2019 Redq, Inc</div>
    </div>
    <ul class="bottomDetails">
      <li class="first">Home</li>
      <li> Advertise</li>
      <li>Supports</li>
      <li>Marketing</li>
      <li>FAQ</li>
    </ul>
  </div>
  </div>
 
</section>
 
</template>

<script>
export default {
  name: "TheBottom",
};
</script>

<style>
.bottomSection{
  margin:0 auto;
  background: var(--deeper-grey);

}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  
}
.bottom > div:nth-child(1) {
  display: flex;
}
.logoAndText {
  display: flex;
  align-items: center;
}
.logoAndText img {
  margin-right: 14px;
}
.logoAndText div:nth-child(2) {
  font-size: var(--small-text);
  color: var(--white);
  line-height: 24px;
}
.copyright {
  font-size: var(--tiny-text);
  color: var(--white);
  opacity: 0.7;
  margin-left: 10px;
  line-height: 18.23px;
}
.bottomDetails {
  display: flex;
  margin: 25px 0 0;
  padding: 0;
}
.bottomDetails >li{
  cursor:pointer;
}
li {
  font-size: var(--small-text);
  color: var(--white);
}
.bottomDetails li:nth-child(2) {
  margin-left: 15px;
}
.bottomDetails  li:nth-child(3) {
  margin-left: 15px;
}
.bottomDetails  li:nth-child(4) {
  margin-left: 15px;
}
.bottomDetails  li:nth-child(5) {
  margin-left: 15px;
}

@media only screen and (max-width: 1000px) {
  .bottom {
    flex-direction: column;
    justify-content: center;
    height: 180px;
  }
  .bottom > div:nth-child(1) {
    flex-direction: column;
    justify-content: center;
  }
  li {
    font-size: 14px;
  }
}
</style>