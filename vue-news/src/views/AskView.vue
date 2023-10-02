<template>
  <div>
    <list-item></list-item>

    <!-- <ul class="ask-list">
      <li v-for="ask in fetchedAsk" class="post">

        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ask.time_ago}} by 
          <router-link v-bind:to="`/user/${ask.user}`" class="link-text">
          {{ ask.user }}
          </router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { mapGetters, mapState } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  components:{
    ListItem,
  }
  // computed: {
    // ...mapGetters({
    //   askItems:'fetchedAsk'
    // })

    // ...mapGetters([
    //   'fetchedAsk'
    // ])


    // 2번째
    // ...mapState({
    //   askList: state => state.asks
    // }),
    // ask() {
    //   return this.$store.state.ask;
    // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASKS');
    // var vm = this;
    // fetchAskList()
    //   .then((response) => {
    //     vm.asks = response.data;
    //   })
    //   .catch();
  // },
};
</script>
<!-- 
<style scoped>
  .ask-list{
    margin: 0px;
    padding: 0px;
  } 
  .post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42B884;
  }
  .ask-title{
    margin:0;
  }
  .link-text{
    color: #828282
  }

</style> -->
