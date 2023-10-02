<template>
  <div id="app">
    <!-- url이 만약  news-->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
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

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}

a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
    text-decoration: underline;
}
</style>
