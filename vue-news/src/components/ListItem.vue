<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItems" class="post">

        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0}}
        </div>

        <!-- 기타 정보영역 -->
        <div>
            <!-- 타이틀 영역    -->
          <p class="item-title">

            <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`/item/${item.id}`">
                    {{ item.title }}
                </router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}} by 
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
            </router-link>
            <a :href="item.url">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
    created() {
    // this.$store.dispatch('FETCH_NEWS');
    console.log(this.$route);
    const name = this.$route.name;

    if(name==='news'){
        this.$store.dispatch('FETCH_NEWS');
    }else if(name==='asks'){
        this.$store.dispatch('FETCH_ASKS');
    }else if (name==='jobs'){
        this.$store.dispatch('FETCH_JOBS');
    }


  
  },
  computed: {
    listItems(){
        const name = this.$route.name;
        if(name==='news'){
            return this.$store.state.news;
        }else if(name==='asks'){
            return this.$store.state.asks;
        }else if (name==='jobs'){
            return this.$store.state.jobs;
        }
    }
  }
}
</script>

<style scoped>
  .item-list{
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
  .news-title{
    margin:0;
  }
  .link-text{
    color: #828282
  }
</style>