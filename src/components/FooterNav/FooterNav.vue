<template>
  <div class="Container">
   <nav class="nav">
     <router-link to="/home" class="navItem">
      <span>
       <i class="iconfont icon-shouye"></i>
      </span>
      <span class="text">首页</span>
     </router-link>
     <router-link to="/categorys" class="navItem">
      <span>
       <i class="iconfont icon-fenlei"></i>
      </span>
      <span class="text">分类</span>
     </router-link>
     <router-link to="/general" class="navItem">
      <span>
       <i class="iconfont icon-tupian"></i>
      </span>
      <span class="text">识物</span>
     </router-link>
     <router-link to="/cart" class="navItem">
      <span>
       <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="text">购物车</span>
     </router-link>
     <router-link to="/profile" class="navItem">
      <span>
       <i class="iconfont icon-geren"></i>
      </span>
      <span class="text">个人</span>
     </router-link>
   </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 .Container
    position absolute
    left 0
    bottom 0
    width 100%
    .nav
      display flex
      height 98px
      .navItem
        width 20%
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        .iconfont
          font-size 40px
        .text
          font-size 24px


</style>
