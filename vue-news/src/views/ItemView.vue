<template>
    <div>
        <section>
            <user-profile :userInfo="fetchedItem">
                <div slot="username">{{ fetchedItem.user }}</div>
                <template slot="time">{{ fetchedItem.time_ago }}</template>
            </user-profile>
            <!--  사용자 상세 정보 -->
            <!-- <div class="user-container">
                <div><i class="fas fa-user"></i></div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
                    <div class="time">{{ fetchedItem.time_ago }}</div>
                </div>
            </div> -->
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchedItem.content"></div>
        </section>

        
    </div>
  
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';
export default {
    components:{
        UserProfile
    },

    computed:{
        // itemInfo(){
        //     return this.$store.state.item
        // }
        ...mapGetters(['fetchedItem'])
    },

    created(){
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',id)
    }

}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding:0.5rem;
}
.fa-user {
    font-size : 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time {
    font-size : 0.7rem;
}
</style>