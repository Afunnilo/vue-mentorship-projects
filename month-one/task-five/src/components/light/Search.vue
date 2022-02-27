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
          <div class="ml-6">
            <div class="is-flex is-flex-wrap-wrap">
              <div class="mr-6">
                <div class="has-text-black is-size-5 is-size-6-mobile">
                  {{ info.name || "User not Available" }}
                </div>
                <div class="has-text-info">@{{ info.login || noLogin }}</div>
              </div>
              <div class="">
                <div class="has-text-black is-size-7">
                  {{ info.created_at || noDate }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            has-text-centered
            ml-6
            has-text-black has-text-centered-mobile
            is-size-6
          "
        >
          {{ info.bio || noBio }}
        </div>
        <div
          class="info-box mt-4 column ml-auto is-two-thirds mr-5 has-text-black"
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
            is-flex is-size-7-mobile is-align-items-center
            mr-auto
            is-justify-content-end
            mt-5
            has-text-black
          "
        >
          <div class="">
            <div>
              <i class="fas fa-location-dot"></i>
              {{ info.location || "Gotham" }}
            </div>
            <div class="mt-3 mr-5">
              <i class="fas fa-link"></i>
              {{ info.blog || "Not Available" }}
            </div>
          </div>
          <div>
            <div>
              <i class="fa-brands fa-twitter"></i>
              {{ info.twitter || "Not Available" }}
            </div>
            <div class="mt-3 mr-5">
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
      noDate: "17 April 1915",
      noBio:
        "Bio not found - It’s not who I am underneath, but what I do that defines me. -Batman",
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

    const SearchInfo = () => {
      if (search.value != "") {
        fetch(`https://api.github.com/users/${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            info.value = data;
            search.value = "";
            console.log(info.value);
          });
      }
    };
    return {
      search,
      info,
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