<template>
<!-- 识物 -->
  <div class="generalContainer">
   <TopicHeader/>
   <div class="navWrap">
       <div class="nav">
         <a href="javacript:;" v-for="(nav,index) in navList" :key="index" :class="{active:currentIndex===index}">{{nav}}</a>
       </div>
    </div>
   <div class="contenteWrap">
     <ul class="mainContent" v-for="(t,index) in topic" :key="index">
      <li class="item"  v-for="(item,index) in t.topics" :key="index">
        <a href="javascript:;" v-if="item.ad" class="ad">
          <img :src="item.ad.picUrl" alt="">
        </a>
        <a href="javascript:;" class="bigImg" v-if="item.type===0">
          <div class="top">
            <img :src="item.avatar" alt="">
            <span>{{item.nickname}}</span>
          </div>
          <p class="desc">{{item.title}}</p>
          <div class="pic">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="view">
            <i class="iconfont icon-view"></i>
            <span class="num">{{item.readCount}}人看过</span>
          </div>
        </a>
        <a href="javascript:;" class="smallImg" v-if="item.type===2">
          <div class="left">
            <div class="top">
              <img :src="item.avatar" alt="">
              <span>{{item.nickname}}</span>
            </div>
            <p class="desc">{{item.title}}</p>
            <p class="category">{{item.subTitle}}</p>
            <div class="view">
              <i class="iconfont icon-view"></i>
              <span class="num">{{item.readCount}}人看过</span>
            </div>
          </div>
          
          <div class="pic">
            <img :src="item.picUrl" alt="">
          </div>
          
        </a>
      </li>
    </ul>
   </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import TopicHeader from '../../components/TopicHeader/TopicHeader.vue'
  export default {
    data() {
      return {
        navList: ['推荐','好货内部价','回购榜','晒单','开发者日记','达人','HOME'],
        currentIndex:0
      }
    },
    computed:{
      ...mapState(['topic']),
    
    },
    mounted(){
      //一上来默认加载前五页
      this.$store.dispatch('getTopic')
   /*    new BScroll('.navWrap',{
        scrollX:true
      }) */
    },
    components:{
      TopicHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .generalContainer
    .navWrap
      width 100%
      height 72px
      position fixed
      z-index 10
      background-color #fff
      left 0
      top 100px
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
    .contenteWrap     
      width 100%
      height 100%
      padding 172px 0 100px      
      .mainContent
       
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
            &.ad
              width 100%
              height 100% 
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
