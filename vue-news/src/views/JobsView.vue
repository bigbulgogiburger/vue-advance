<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="jobs in this.$store.state.jobs" class="post">

        <div class="points">
          {{ jobs.points || 0}}
        </div>

        <div>
          <p class="jobs-title">
            <a v-bind:href="jobs.url">
              {{ jobs.title }}
            </a>
          </p>
          <small class="link-text">
            {{jobs.time_ago}} by 
            <a v-bind:href="jobs.url">
              {{ jobs.domain }}
            </a>
            
    
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index.js";
import ListItem from '../components/ListItem.vue';
import bus from '@/utils/bus';
import ListMixin from '../mixins/ListMixin.js'
export default {

  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin]
  
  // ,
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(()=>{this.$store.dispatch('FETCH_JOBS')
  //   .then(() => {
  //     console.log('fetched');
  //     bus.$emit('end:spinner');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });},3000)
  // }
};
</script>

