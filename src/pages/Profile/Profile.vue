<template>
  <div class="profileContainer">
   <TopicHeader/>
   <div class="content">
     <h2 class="logo">
       <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
     </h2>
     <div class="btns">
       <a href="javascript:;" class="phone-login active">
         <i class="iconfont icon-phone"></i>
         <span>手机号码登录</span>
       </a>
        <a href="javascript:;" class="pwd-login">
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
       </a>
     </div>
     <div class="phone-link">
       <a href="javascript:;">
         <span>手机号快速注册</span>
         <i class="iconfont icon-arrow"></i>
       </a>
     </div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopicHeader from '../../components/TopicHeader/TopicHeader.vue'
  export default {
    components:{
      TopicHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profileContainer
    background-color #eee
    height 100%
    .content
      padding-top 100px
      .logo
        padding 160px 0 
        text-align center
        img 
          width 268px
          height 90px
      .btns
        padding 0 40px
        a 
          width 100%
          height 90px
          line-height 90px
          margin-bottom 32px
          color #b4282d
          border 1px solid #b4282d
          font-size 30px
          display flex
          align-items center
          justify-content center
          &.active
            background-color #b4282d
            color #fff   
          .iconfont
            font-size 34px
            margin-right 10px
      .phone-link 
        text-align center
        a
          display flex
          justify-content center
          align-items center
          span 
            color #333
            font-size 28px
          .iconfont
            font-size 30px        
 
</style>
