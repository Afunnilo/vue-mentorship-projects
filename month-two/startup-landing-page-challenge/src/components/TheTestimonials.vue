<template>
  <div class="testimonialSection" id="testimonials">
    <div class="testimonialContainer">
      <div class="testimonialHeaderContainer">
        <div class="testimonialtextContainer">
          <h2>What client say about us</h2>
          <p>Customer testimonial</p>
        </div>
      </div>
      <div class="rowContainer">
        <div class="rows">
          <div class="row">
            <div class="box box1">
              Thank you for all your help. Your service was excellent and very
              FAST.
              <div class="profileDiv">
                <div class="profileImageDiv">
                  <img src="../assets/images/testimonials/1.png" alt="person" />
                </div>
                <div class="profileText">
                  <h3>Cherice Justin</h3>
                  <a href="#">me.cherice</a>
                </div>
              </div>
            </div>
            <div class="box box2">
              For our recent trip to S.A. I booked several accommodation thru SA
              Places. I just wanted to tell you that everything worked out
              perfectly with all the bookings and also your booking was very
              quick and professional. I hope I have the opportunity to re-visit
              South Africa soon, I will then make my bookings with your company
              again. I will also recommend
              <div class="profileDiv">
                <div class="profileImageDiv">
                  <img src="../assets/images/testimonials/2.png" alt="person" />
                </div>
                <div class="profileText">
                  <h3>Thais Carballal</h3>
                  <a href="#">myself.thais</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="box box3">
              I would just like to compliment Estelle Pestana. She has been most
              professional and gone to great lengths to assist me. Her patience
              with me as I continuously changed my plans is to be commended. Her
              service re-affirms why I always choose to book through an agency
              instead of directly. Thank you
              <div class="profileDiv">
                <div class="profileImageDiv">
                  <img src="../assets/images/testimonials/3.png" alt="person" />
                </div>
                <div class="profileText">
                  <h3>Veona Watson</h3>
                  <a href="#">hi.veona</a>
                </div>
              </div>
            </div>
            <div class="box box4">
              I would like to take this opportunity to thank SA Places for the
              great service rendered to us and in particular Estelle. You got me
              the best place ever in just a few moments after I spoke to you.
              <div class="profileDiv">
                <div class="profileImageDiv">
                  <img src="../assets/images/testimonials/4.png" alt="person" />
                </div>
                <div class="profileText">
                  <h3>Minnie Horn</h3>
                  <a href="#">minnie.horn</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="box box5">
              Many thanks for you kind and efficient service. I have already and
              will definitely continue to recommend your services to others in
              the future.
              <div class="profileDiv">
                <div class="profileImageDiv">
                  <img src="../assets/images/testimonials/5.png" alt="person" />
                </div>
                <div class="profileText">
                  <h3>Merryn Manley</h3>
                  <a href="#">merryn.manley</a>
                </div>
              </div>
            </div>
            <div class="box box6">
              I would just like to compliment Estelle Pestana. She has been most
              professional and gone to great lengths to assist me. Her patience
              with me as I continuously changed my plans is to be commended. Her
              service re-affirms why I always choose to book through an agency
              instead of directly. Thank you
              <div class="profileDiv">
                <div class="profileImageDiv">
                  <img src="../assets/images/testimonials/6.png" alt="person" />
                </div>
                <div class="profileText">
                  <h3>Paseka Nku</h3>
                  <a href="#">hey.nku</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTestimonials",
};
</script>

<style>
.testimonialSection {
  background: #fffcf7;
  overflow: visible;
  max-width: 100%;
  padding-top: 70px;
  padding-bottom: 40px;

}
.testimonialContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.testimonialHeaderContainer {
  max-width: 1260px;
}
.testimonialtextContainer {
  text-align: center;
  display:flex;
  justify-content: center;
  flex-direction: column;
}
.testimonialtextContainer > h2 {
  font-weight: 700;
  font-size: 30px;
  line-height: 55px;
  letter-spacing: -1.5px;
  color: var(--blueishtext);
}
.testimonialtextContainer > p {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #858b91;
}
.rows {
  display: flex;
  justify-content: space-evenly;
}
.box {
  background: #ffffff;
  border-radius: 5px;
  padding: 25px;
  transition: all 0.3s ease 0s;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  cursor: grab;
  color: #343d48;
}
.box:hover {
  box-shadow: 0px 13px 40px rgba(75, 102, 135, 0.1);
}
.boxText {
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #343d48;
}
.profileDiv {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.profileImageDiv {
  margin-right: 15px;
  margin-left: 0px;
}
.profileText {
  display: flex;
  flex-direction: column;
}
.profileText > h3 {
  font-size: 16px;
  line-height: 1.3;
  color: var(--bluegrey);
  font-weight: 500;
  margin: 0;
}
.profileText > a {
  font-weight: 500;
  font-size: 14px;

  text-decoration: none;
}
.box1 {
  width: 400px;
  height: 180px;
  margin-bottom: 20px;
  margin-right:15px;
}
.box2 {
  width: 400px;
  height: 355px;
}
.box3 {
  width: 400px;
  height: 330px;
  margin-bottom: 20px;
  margin-right:15px;
}
.box4 {
  width: 400px;
  height: 240px;
}
.box5 {
  width: 400px;
  height: 240px;
  margin-bottom: 20px;
}
.box6 {
  width: 400px;
  height: 320px;
}
@media only screen and (max-width: 1024px) {
  .testimonialtextContainer > h2 {
    font-size: 24px;
  }
  .testimonialtextContainer > p {
    font-size: 18px;
    margin: 10px auto;
  }
  .box3 {
    width: 315px;
    margin-right: auto;
    margin-left: auto;
    height: 380px;
  }
  .row {
    justify-content: center;
  }
  .rows{
    overflow-x:auto ;
  }
  .profileImageDiv {
    margin-left: 0px;
  }
  .box4 {
    width: 315px;
    margin-right: auto;
    margin-left: auto;
    height: 380px;
  }
  .box5,
  .box6 {
    margin-left: 20px;
  }
  .box1,
  .box2 {
    margin-right: 20px;
  }
}
</style>