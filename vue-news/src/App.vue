<template>
  <div id="app">
    <!-- url이 만약  news-->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
/* eslint-disable */
export default {
  components: { ToolBar },
  methods: {
    fetchData() {
      console.log("hello");
    },
  },
};
</script>

<style></style>
