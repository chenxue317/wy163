<template>
 <div>
  <div class="wrap">
   <div class="title">
    <span>历史记录</span>
    <i class="iconfont icon-search"></i>
   </div>
   <ul class="history">
    <li class="item" v-for="(item,index) in historyKeyWord" :key="index">
     <a href="javascript:;">{{item}}</a>
    </li>
   </ul>
  </div>
  <div class="box"></div>
 </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex';
  export default {
   props:{
     historyKeyWord:Array
   }, 
   computed:{
    ...mapState(['hotSearch'])
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
 width 100%
 padding 40px
 box-sizing border-box
 background-color #fff
 .title
  width 100%
  display flex
  justify-content space-between
  font-size 32px
  color #ccc
 .history
  width 100%
  height 100%
  margin-top 30px
  display flex
  flex-wrap wrap
  .item
   height 40px
   line-height 40px
   padding 10px
   border-radius 10px
   border 1px solid #7f7f7f
   margin-right 10px
   margin-bottom 10px
.box
 width 100%
 height 20px
 background-color #eee  
 
</style>
