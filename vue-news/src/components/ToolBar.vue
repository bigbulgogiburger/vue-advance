<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
/* .header a:active{

    } */
.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}

body {
  padding: 0;
  margin: 0;
}
</style>
