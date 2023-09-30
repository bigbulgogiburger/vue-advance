<template>
  <div>
    <div v-for="ask in fetchedAsk">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    // ...mapGetters({
    //   askItems:'fetchedAsk'
    // })

    ...mapGetters([
      'fetchedAsk'
    ])


    // 2번째
    // ...mapState({
    //   askList: state => state.asks
    // }),
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
    // var vm = this;
    // fetchAskList()
    //   .then((response) => {
    //     vm.asks = response.data;
    //   })
    //   .catch();
  },
};
</script>

<style></style>
