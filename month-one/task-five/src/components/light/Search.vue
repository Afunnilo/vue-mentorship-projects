<template>
  <div>
    <div class="search column mt-5 is-half is-offset-one-quarter">
      <form @submit.prevent="SearchInfo()">
        <div class="field is-flex is-justify-content-space-between">
          <div class="control has-icons-left has-addons">
            <input
              class="input has-text-black"
              type="text"
              placeholder="Search Github Username..."
              v-model="search"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid has-text-info fa-magnifying-glass"></i>
            </span>
          </div>
          <div class="control">
            <button
              @click="toggleResults"
              type="submit"
              value="Search"
              class="button is-info"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- /*RESULTS CONTAINER */ -->
    <div v-if="showResults">
      <div class="results column mt-5 is-half is-offset-one-quarter">
        <div class="is-flex mt-3 is-justify-content-space-center">
          <div class="image is-128x128 ml-4">
            <img
              class="is-rounded"
              :src="[info.avatar_url || avatar]"
              alt="profile picture"
            />
          </div>
          <div class="column ml-auto is-three-fifths">
            <div class="is-flex is-flex-wrap-wrap">
              <div class="mr-6">
                <div class="has-text-black is-size-6 is-size-6-mobile">
                  {{ info.name || "User not Available or poor connection" }}
                </div>
                <div class="has-text-info is-size-7">
                  @{{ info.login || noLogin }}
                </div>
              </div>
              <div class="">
                <div class="has-text-black is-size-7">
                  joined {{ date || noDate }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            has-text-justified
            column
            ml-auto
            is-three-fifths
            has-text-black has-text-centered-mobile
            is-size-6
          "
        >
          {{ info.bio || "Bio Not Available" }}
        </div>
        <div
          class="info-box mt-4 column ml-auto is-three-fifths has-text-black"
        >
          <div class="is-flex is-justify-content-space-around">
            <div>
              <div>Repos</div>
              <div class="has-text-weight-bold">
                {{ info.public_repos || "0" }}
              </div>
            </div>
            <div>
              <div>Followers</div>
              <div class="has-text-weight-bold">
                {{ info.followers || "0" }}
              </div>
            </div>
            <div>
              <div>Following</div>
              <div class="has-text-weight-bold">
                {{ info.following || "0" }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            column
            ml-auto
            is-three-fifths is-flex is-flex-direction-column
            mt-2
            has-text-black
            is-justify-content-right is-size-6-mobile is-size-7
            has-text-right
          "
        >
          <div class="is-flex is-flex-wrap-wrap">
            <div class="mr-5">
              <i class="fas fa-location-dot"></i>
              {{ info.location || "Not Available" }}
            </div>
            <div>
              <i class="fa-brands fa-twitter"></i>
              {{ info.twitter || "Not Available" }}
            </div>
          </div>
          <div class="is-flex is-flex-wrap-wrap">
            <div class="mr-5">
              <i class="fas fa-link"></i>
              {{ info.blog || "Not Available" }}
            </div>
            <div>
              <i class="fa-solid fa-building"></i>
              {{ info.company || "Not Available" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      avatar:
        "https://d1v224g40dbxxy.cloudfront.net/s3fs-public/carousel-images/1_1.jpg?VersionId=kvaFJnLWabUiLkphD2fOCd6m5u6qHRWx",
      noLogin: "showingBatmanInstead",
      noDate: "Not Available",
      showResults: false,
      info: [],
    };
  },
  methods: {
    toggleResults() {
      this.showResults = true;
    },
  },
  setup() {
    const search = ref("");
    const info = ref([]);
    const date = ref("");

    const SearchInfo = () => {
      if (search.value != "") {
        fetch(`https://api.github.com/users/${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            info.value = data;
            search.value = "";
            console.log(info.value);
            date.value = new Date(Date.parse(info.value.created_at))
              .toString()
              .substring(4, 15);
          });
      }
    };
    return {
      search,
      info,
      date,
      SearchInfo,
    };
  },
};
</script>


<style scoped>
.search {
  background: #fff;
  border-radius: 10px;
}
.field {
  background: #fff;
}
.control > input {
  background: #fff;
  border: 1px solid #fff;
  color: white;
}
input:focus {
  outline: none;
}
.results {
  background: #fff;
  border-radius: 10px;
}
.info-box {
  background-color: aliceblue;
  border-radius: 10px;
}
@media only screen and (max-width: 600px) {
  .results,
  .search {
    margin: 10px;
  }
}
</style>
