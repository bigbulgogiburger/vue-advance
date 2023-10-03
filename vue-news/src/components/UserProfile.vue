<template>
    <!--  질문 상세 정보 -->
    <div class="user-container">
        <div><i class="fas fa-user"></i></div>
        <div class="user-description">
            
            
            <!-- <div>username : {{ userInfo.id }}</div> -->
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <div class="time">
                <!-- time: {{ userInfo.created }} -->
                <slot name="time">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        userInfo: Object
    }
    
    // computed: {
    //     userInfo(){
    //         return this.$store.state.user;
    //     } 
    // },

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