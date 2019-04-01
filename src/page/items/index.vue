<template>
   <div>
     <itemcontainer father="item"></itemcontainer>
   </div>
</template>

<script>
  import itemcontainer from '@/components/itemcontainer';
  export default {
    name: "index",
    components:{
      itemcontainer
    },
    created() {
    //  进入做题界面，开始计时
      this.$store.commit('REMBER_TIME')
    }
  }
</script>

<style scoped>

</style>
