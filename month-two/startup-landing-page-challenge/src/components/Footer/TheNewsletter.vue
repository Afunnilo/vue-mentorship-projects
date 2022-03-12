<template>
  <div class='newsletter'>
    <div>
      Subscribe to get notified about update
    </div>
    <div>
      By subscribing with your mail, you will accept our privacy policy
    </div>
    <form class='subscribe'>
      <div>
        <input class='newsletterInput' type="text" placeholder="Enter your email">
      </div>
      <div>
        <button>
          Get Started
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:'TheNewsletter'
}
</script>

<style>
.newsletter{
  height:468px;
  background-color: var(--deep-grey);
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
}
.newsletter > div:nth-child(1){
  font-size:var(--big-text);
  color:var(--white);
  font-weight: 500;
  text-align:center;
}
.newsletter > div:nth-child(2){
  font-size:var(--small-text);
  color:var(--white);
  opacity:0.6;
  line-height:50px;
  text-align:center;
}
.subscribe{
  display:flex;
  margin-top:50px;
}
.subscribe >div:nth-child(1)>input{
  width:380px;
  min-height:50px;
  border-radius: 5px;
  border:none;
  background:rgba(255, 255, 255, 0.08);
  color: rgba(255,255,255,0.8);
  font-size: var(--small-text);
  line-height:50px;
  padding-left:25px;
  margin-right:15px;
  outline-color: var(--yellow-bg);
  box-shadow: 0px 16px 40px rgb(72 59 26 / 8%);
}
.subscribe >div:nth-child(2)>button{
  width:160px;
  min-height: 50px;
  background:var(--yellow-bg);
  color:var(--white);
  font-weight:bold;
  border-radius:4px;
  border:none;
  font-size:var(--small-text);
  transition: 0.3s ease-in-out 0s;
  padding:0 25px;
  white-space: nowrap;
}
@media only screen and (max-width:770px){
  .subscribe{
    flex-direction: column;
    max-width: 555px;
    justify-content: center;
  }
  .newsletter{
    margin: 0 auto;
    padding-left:30px;
    padding-right:30px;
  }
  .newsletter > div:nth-child(1){
    font-size:24px;
  }
  .newsletter > div:nth-child(2){
    font-size:16px;
    line-height:1.86;
    margin-top:15px;
  }
  .subscribe >div:nth-child(1)>input{
    width:280px;
    margin-right:0px;
  }
  .subscribe >div:nth-child(2)>button{
    font-size:var(--tiny-text);
    margin-top:20px;
    min-width:280px;
    margin-left:0;
  }
}

</style>