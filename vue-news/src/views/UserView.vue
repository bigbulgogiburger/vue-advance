<template>
    <div>
        <!-- <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p> -->
        <user-profile :userInfo="userInfo">
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
            <span slot="karma"> {{ userInfo.karma }}</span>
        </user-profile>
    </div>
  
</template>

<script>

import UserProfile from '../components/UserProfile.vue';

export default {
    components:{
        UserProfile,
    },
    computed: {
        userInfo(){
            return this.$store.state.user;
        } 
    },
    created(){
        console.log(this.$route.params.id);
        const userName = this.$route.params.id
        this.$store.dispatch('FETCH_USER', userName)
        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    },
    
}
</script>

<style>

</style>