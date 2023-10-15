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
import bus from '@/utils/bus';

export default {
  components:{
    ListItem,
  },
  
  created() {
    bus.$emit('start:spinner');
    setTimeout(()=>{this.$store.dispatch('FETCH_ASKS')
    .then(() => {
      console.log('fetched');
      bus.$emit('end:spinner');
    })
    .catch(error => {
      console.log(error);
    });},3000)
  }

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
