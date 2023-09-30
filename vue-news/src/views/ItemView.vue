<template>
    <div>
        {{ itemInfo }}
    </div>
  
</template>

<script>
export default {

    computed:{
        itemInfo(){
            return this.$store.state.item
        }
    },

    created(){
        console.log(this.$route)
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',id)
    }

}
</script>

<style>

</style>