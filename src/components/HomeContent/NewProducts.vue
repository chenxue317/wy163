<template>
<!-- 商品分类 -->
  <ul class="categorys" v-if="newProducts.kingKongList">
   <li class="item" v-for="(p,index) in newProducts.kingKongList" :key="index">
    <a href="javascript:;">
     <img :src="p.picUrl" alt="">
     <span>{{p.text}}</span>
    </a>
   </li>

     
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      newProducts:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .categorys
  display flex
  flex-wrap wrap
  padding-bottom 32px
  .item
   width 20%
   a
    display flex
    flex-direction column
    align-items center
    width 110px
    height 156px
    margin 10px 20px 9px
    img 
     width 110px
     margin 10px
    span 
     color #000
 
</style>

