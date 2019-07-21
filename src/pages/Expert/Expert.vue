<template>
  <div>
    <TopicHeader/>
    <div class="content">
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <div class="imgBox">
                  <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <div class="imgBox">
                  <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;">
                <div class="imgBox">
                  <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                </div>
              </a>
            </div>
               <div class="swiper-slide">
              <a href="javascript:;">
                <div class="imgBox">
                  <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Card/>
      <Card/>
      <Card/>
    </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
  import TopicHeader  from '../../components/TopicHeader/TopicHeader.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  import Card from './Card.vue'
  export default {
    components:{
      TopicHeader,
      Card
    },
    mounted(){
      new Swiper('.swiper-container',{
        loop:true,
        initialSlide:1,
        loopedSlides:3

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    padding-top 100px 
    .banner
      &::after
        content ''
        display block
        width 100%
        height 20px
        background-color #f7f7f7
      .swiper-container
        height 420px
        
        .swiper-wrapper
          padding 24px 0
          .swiper-slide
            width 668px
            height 372px
            display flex
            justify-content center
            a
              width 668px
              height 372px
              .imgBox
                width 668px
                height 372px
                img 
                  width 668px
                  height 372px
                  border-radius 20px
        .storeActivity-list .swiper-slide
          width 90%!important
          margin 0 5%
        
        .swiper-slide-prev
          right -8%
        .swiper-slide-next
          left -8%
        
          
 
</style>
