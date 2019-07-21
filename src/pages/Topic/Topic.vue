<template>
<!-- 识物 -->
  <div class="generalContainer">
   <header class="general-header">
     <div class="header">
       <a class="left-home">
         <i class="iconfont icon-shouye"></i>
       </a>
       <div class="tab">
         <a href="javascript:;" class="discover active">发现</a>
         <a href="javascript:;" class="choice">甄选家</a>
       </div>
       <div class="searchAndCart">
         <a href="javascript:;"><i class="iconfont icon-search"></i></a>
         <a href="javascript:;"><i class="iconfont icon-gouwuche"></i></a>
       </div>
     </div>
     <div class="navWrap" v-if="1">
       <div class="nav">
         <a href="javacript:;" v-for="(nav,index) in navList" :key="index" :class="{active:currentIndex===index}">{{nav}}</a>
       </div>
     </div>
   </header>
   <ul class="mainContent">
     <li class="item">
      <a href="javascript:;" class="bigImg" v-if="0">
        <div class="top">
          <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
          <span>选妹</span>
        </div>
        <p class="desc">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>
        <div class="view">
          <i class="iconfont icon-view"></i>
          <span class="num">5682人看过</span>
        </div>
      </a>
      <a href="javascript:;" class="smallImg">
        <div class="left">
          <div class="top">
            <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
            <span>选妹</span>
          </div>
          <p class="desc">一次吃遍8种坚果，零食之王要这样吃才对</p>
          <p class="category">鲜粹每日坚果</p>
          <div class="view">
            <i class="iconfont icon-view"></i>
            <span class="num">5682人看过</span>
          </div>
        </div>
        
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272" alt="">
        </div>
        
      </a>
     </li>
     
     
   </ul>
   
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        navList: ['推荐','好货内部价','回购榜','晒单','开发者日记','达人','HOME'],
        currentIndex:0
      }
    },
    mounted(){
      new BScroll('.navWrap',{
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .generalContainer
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
      .navWrap
        height 72px
        border-top 1px solid #ccc
        display flex
       
        .nav
          width 1000px
          display flex
          padding-bottom 20px
          height 72px
          line-height 72px
          a
            padding 0 8px
            margin 0 20px
            font-size 28px
            flex-shrink 0  
            &.active
              color #b4282d
              border-bottom 1px solid  #b4282d     
    .mainContent
      width 100%
      height 100%
      padding 172px 0 100px
      &::before
        content ''
        display block
        width 100%
        height 20px
        background-color #f0f0f0
      .item
        position relative
        &::after
          content ''
          position absolute
          left 0
          bottom 0
          width 100%
          height 20px
          background-color #f0f0f0
        a
          color #333
          display block
          padding 36px 30px 
          &.bigImg     
            .top
              margin-bottom 24px
              display flex
              align-items center
              img 
                width 54px
                height 54px
                border-radius 50%
                margin-right 12px
                border 1px solid #d9d9d9
              span 
                font-size 28px
                
            .desc
              margin-bottom 16px
              font-size 36px
            .pic
              img 
                width 100%
                height 376px 
            .view
              display flex
              align-items center
              margin-top 18px
              color gray
              font-size 24px 
              .iconfont
                margin-right 8px 
          &.smallImg 
            display flex
            justify-content space-between
            .left
              width 400px
              .top
                display flex
                align-items center
                img 
                  width 54px
                  height 54px
                  border-radius 50%
                  margin-right 12px
                  border 1px solid #d9d9d9
                span 
                  font-size 28px
                  
              .desc
                margin-bottom 16px
                font-size 36px
                padding-top 32px 
              .category
                color #7f7f7f
                padding-top 8px  
              .view
                display flex
                align-items center
                margin-top 18px
                color #7f7f7f
                font-size 24px 
                .iconfont
                  margin-right 8px   
            .pic
              img 
                width 272px
                height 272px 
                
            
          
            
</style>
