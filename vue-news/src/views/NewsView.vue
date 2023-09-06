<template>
  <div>
    <div v-for="news in newsList">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";
export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    var vm = this;
    fetchNewsList()
      .then(function (response) {
        vm.newsList = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
