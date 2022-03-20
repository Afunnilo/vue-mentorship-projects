<template>
  <div class="serviceSection" id="support">
    <div class="serviceContainer">
      <div class="card">
        <div>
          <div class="personImageContainer">
            <img src="../assets/images/support.png" alt="support" />
          </div>
          <div class="cardText">
            <h2>
              Do you need help support
              <img
                src="../assets/images/icons/right-arrow.png"
                alt="right arrow"
              />
            </h2>
            <p>
              Get your website ads tests delivered at let collect sample from
              the victory of the update managements services.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="personImageContainer">
            <img src="../assets/images/support.png" alt="support" />
          </div>
          <div class="cardText">
            <h2>
              Do you need help support
              <img
                src="../assets/images/icons/right-arrow.png"
                alt="right arrow"
              />
            </h2>
            <p>
              Get your website ads tests delivered at let collect sample from
              the victory of the update managements services.
            </p>
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
.serviceSection {
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 70px;
}
.serviceContainer {
  display: flex;
  justify-content: center;
}
.card {
  width: 540px;
  height: 230px;
  background: #f6f8fb;
  transition: 0.3s ease-in-out 0s;
  margin-left: 30px;
  border-radius: 7px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0px 13px 40px rgba(75, 102, 135, 0.1);
  background: #fff;
}
.card > div {
  padding: 25px 25px 20px;
  padding-right: 30px;
  display: flex;
  margin: 0;
}
.personImageContainer {
  margin: 0;
  min-width: 80px;
  margin-right: 30px;
}
.cardText {
  margin-top: -15px;
}
.cardText > h2 {
  font-size: 20px;
  color: var(--blueish);
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cardText > p {
  font-size: 16px;
  line-height: 2.13;
  color: var(--bluegrey);
  margin-top: 15px;
  text-align: left;
}

@media only screen and (max-width: 900px) {
  .serviceSection {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding-top: 0px;
    justify-content: center;
  }
  .serviceContainer {
    flex-direction: column;
    justify-content: center;
  }
  .card {
    width: 300px;
    margin-bottom: 15px;
    margin-left: 0;
  }
  .card > div {
    flex-direction: column;
  }
  .cardText > h2 {
    font-size: 16px;
  }
  .cardText > p {
    font-size: 14px;
  }
  .personImageContainer > img {
    width: 40px;
  }
}
</style>