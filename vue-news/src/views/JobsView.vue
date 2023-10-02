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
export default {

  components: {
    ListItem,
  }
  

//   created() {
//     this.$store.dispatch('FETCH_JOBS');
//   },
};
</script>

