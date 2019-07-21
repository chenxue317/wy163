<template>
  <header class="general-header">
    <div class="header">
      <router-link to="/" class="left-home">
        <i class="iconfont icon-shouye"></i>
      </router-link>
      <div class="tab" v-if="$route.path==='/topic'||$route.path==='/expert'">
        <a href="javascript:;" class="discover" :class="{active:$route.path==='/topic'}" @click="$router.push('/topic')">发现</a>
        <a href="javascript:;" class="choice" :class="{active:$route.path==='/expert'}" @click="$router.push('/expert')">甄选家</a>
      </div>
      <div class="title" v-if="$route.path==='/profile'">
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
    align-items center
    justify-content space-between
    font-size 28px
    border-bottom 1px solid #ccc
    .icon-shouye
      font-size 50px
      position absolute
      left 24px
      top 0
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
    .title
      width 160px
      height 44px
      margin 0 auto
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      background-size 100% 100%
    .searchAndCart
      position absolute
      right 26px
      top 0
      .iconfont
        font-size 45px
      .icon-search
        margin-right 20px
    
 
</style>
