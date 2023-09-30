<template>
  <div>
    <div v-for="news in this.$store.state.news">{{ news.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";
export default {

  created() {

    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // console.log('호출 전 : ', this)
    // fetchNewsList()
    //   .then(response => {
    //     //es6 화살표함수는 this를 현재 호출한 이곳의 this를 준다.
    //     console.log('호출 후 : ',this)
    //     vm.newsList = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
