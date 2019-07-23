<template>
  <div class="searchContainer" @click="$router.push('/search')">
   <input type="text" :placeholder="icon" class="search iconfont"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
   data() {
    return {
     icon: '\ue60c 搜索好物，共21756款好物'
    }
   },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .searchContainer
  position fixed
  width 100%
  height 88px
  padding 0 30px
  background-color #fff
  line-height 88px
  border-bottom 1px solid #eee
  z-index 10
  .search
   width 690px
   height 56px
   text-align center
   background-color #eee
   font-size 24px
   border-radius 10px
 
</style>
