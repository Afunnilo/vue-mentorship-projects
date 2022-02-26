<template>
  <div>
    <div class="search column mt-4 is-half is-offset-one-quarter">
      <form @submit.prevent="SearchInfo()">
        <div class="field is-flex is-justify-content-space-between">
          <div class="control has-icons-left has-addons">
            <input
              class="input has-text-light"
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
                <div class="has-text-white is-size-5">
                  {{ info.name || "User not Available" }}
                </div>
                <div class="has-text-info">@{{ info.login || noLogin }}</div>
              </div>
              <div class="">
                <div class="has-text-white is-size-7">
                  {{ info.created_at || noDate }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            has-text-justified
            ml-6
            has-text-white has-text-center-mobile
            is-size-6
          "
        >
          {{ info.bio || noBio }}
        </div>
        <div
          class="info-box mt-4 column ml-auto is-two-thirds mr-5 has-text-white"
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
        <div class="is-flex is-justify-content-end mr-6 mt-5 has-text-light">
          <div class="mr-5">
            <div>
              <i class="fas fa-location-dot"></i>
              {{ info.location || "Gotham" }}
            </div>
            <div class="mt-3">
              <i class="fas fa-link"></i>
              {{ info.blog || "Not Available" }}
            </div>
          </div>
          <div>
            <div>
              <i class="fa-brands fa-twitter"></i>
              {{ info.twitter || "Not Available" }}
            </div>
            <div class="mt-3">
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

<style>
.search {
  background: #536895;
  border-radius: 10px;
}
.field {
  background: #536895;
}
.control > input {
  background: #536895;
  border: 1px solid #536895;
  color: white;
}
input:focus {
  outline: none;
}
.results {
  background: #536895;
  border-radius: 10px;
}
.info-box {
  background-color: #1f305e;
  border-radius: 10px;
}
</style>