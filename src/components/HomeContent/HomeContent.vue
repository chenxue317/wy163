<template>
  <div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
          
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/dc972eece406987cbdd29f8849055d45.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3b6044678c7d6ec12a1733657aa294ae.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/820d46ff89b81f8344aaabd5b054dc83.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/820d46ff89b81f8344aaabd5b054dc83.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    <ul class="tag">
      <li class="item">
        <i></i>
        <span>网易自营品牌</span>
      </li>
      <li class="item">
        <i></i>
        <span>网易自营品牌</span>
      </li>
      <li class="item">
        <i></i>
        <span>网易自营品牌</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper'
 import "swiper/dist/css/swiper.css"
  export default {
   mounted(){
    new Swiper('.swiper-container',{
     loop: true,
     autoplay:true,
     pagination: {
      el: '.swiper-pagination'
     }
    },

    )
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
  width 100%
  height 400px
 .swiper-wrapper
   width 100%
   height 400px
  .swiper-slide
   width 100%
   height 400px
   img 
    width 100%
    height 400px
     
  /deep/.swiper-pagination
   bottom 30px
   .swiper-pagination-bullet
     width 40px 
     height 4px
     border-radius 1px
     background-color rgba(255,255,255,.8) 

.tag 
  padding  0 30px
  height 72px
  line-height 72px
  display flex
  .item
    width 33.3%
    text-align center
    i 
      display inline-block
      vertical-align middle
      width 32px
      height 32px
      background-image url(imgs/yi.png)
      background-size 100% 100%
      background-position center
      margin-right 10px
    span 
      font-size 0.32rem  
</style>
