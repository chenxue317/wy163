<template>
  <div class="limitWrap">
   <!-- 限时购 -->
   <div class="title">
    <div class="t-left">
     <h1>限时购</h1>
     <div class="durTime">
      <span class="hours">00</span>
      <span class="col">:</span>
      <span class="minutes">00</span>
      <span class="col">:</span>
      <span class="seconds">00</span>
     </div>
    </div>
    <div class="t-right">
     <span class="more">更多</span>
     <span class="iconfont icon-arrow"></span>
    </div>
   </div>
   <ul class="content">
    <li class="item" v-for="shop in limitShopList" :key="shop.itemId">
     <a href="javascript:;">
      <div class="imgWrap">
       <img :src="shop.picUrl" alt="">
      </div>
      <div class="price">
       <span class="currentPrice">
        ￥{{shop.activityPrice}}
       </span>
       <span class="oldPrice">
        ￥{{shop.originPrice}}
       </span>
      </div>

     </a>
    </li>
   </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      limitShopList:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .limitWrap
  .title//标题
   display flex
   justify-content space-between
   align-items center
   padding 0 30px
   height 100px
   .t-left//左侧标题
    display flex
    align-items center
    h1
     font-size 32px
    .durTime//持续时间
     font-size 24px
     margin-left 15px
     .hours
     .minutes
     .seconds
      display inline-block
      width 36px
      height 36px
      line-height 32px
      text-align center
      background-color #000
      color #fff
      margin 10px
     .col
       color #000
   .t-right
    display flex
    align-items center
    .iconfont
     margin-left 8px
     font-size 12px
     vertical-align middle
    .more
     font-size 28px 
  .content//内容
   height 598px
   padding-left 30px
   padding-right 10px
   display flex
   flex-wrap wrap
   .item
    a
     display flex
     flex-direction column
     width 216px
     height 269px
     margin-right 20px
     padding-bottom 30px
     .imgWrap
      width 216px
      height 216px
      margin-bottom 12px
      background-color #eee
      img 
       width 216px
       height 216px
     .price
      height 41px
      width 216px
      padding-left 20px
      box-sizing border-box
      .currentPrice
       color #b4282d
      .oldPrice
       color #ccc

</style>
