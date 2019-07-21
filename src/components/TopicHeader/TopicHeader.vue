<template>
  <header class="general-header">
    <div class="header">
      <router-link to="/" class="left-home">
        <i class="iconfont icon-shouye"></i>
      </router-link>
      <div class="tab">
        <a href="javascript:;" class="discover" :class="{active:$route.path==='/topic'}" @click="$router.push('/topic')">发现</a>
        <a href="javascript:;" class="choice" :class="{active:$route.path==='/expert'}" @click="$router.push('/expert')">甄选家</a>
      </div>
      <div class="searchAndCart">
        <router-link to="/search"><i class="iconfont icon-search"></i></router-link>
        <router-link to="/cart"><i class="iconfont icon-gouwuche"></i></router-link>
      </div>
    </div>
   </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      isActive:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.general-header
  width 100%
  position fixed
  z-index 10
  background-color #fafafa
  .header
    position relative
    width 100%
    height 100px
    line-height 100px
    padding-left 24px
    padding-right 26px
    box-sizing border-box
    display flex
    font-size 28px
    border-bottom 1px solid #ccc
    .icon-shouye
      font-size 42px
    .tab
      display flex
      justify-content center
      flex-grow 3
      a
        padding 0 8px
        &.active
          color #b4282d
          font-size 34px
          font-weight 700
    .searchAndCart
      position absolute
      right 26px
      top 0
      .iconfont
        font-size 40px
      .icon-search
        margin-right 20px
    
 
</style>
