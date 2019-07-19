<template>
  <div class="content">
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
    <HomeCategorys/>
    <!-- 广告栏 -->
    <div class="advert">
      <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
    </div>
    <div class="shopingGui">
      <div class="shopItem">
        <a href="javascript:;">
          <p class="title">几元就买小确幸</p>
          <p class="text">珍惜唾手可得的小幸福</p>
          <div class="pics">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </a>
      </div>
      <div class="shopItem">
        <a href="javascript:;">
          <p class="title">几元就买小确幸</p>
          <p class="text">珍惜唾手可得的小幸福</p>
          <div class="pics">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </a>
      </div>
      <div class="shopItem">
        <a href="javascript:;">
          <p class="title">几元就买小确幸</p>
          <p class="text">珍惜唾手可得的小幸福</p>
          <div class="pics">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </a>
      </div>
      <div class="shopItem">
        <a href="javascript:;">
          <p class="title">几元就买小确幸</p>
          <p class="text">珍惜唾手可得的小幸福</p>
          <div class="pics">
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </a>
      </div>
    </div>
    <div class="grayBox"></div>
    <div class=""></div>
  </div>
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper'
 import "swiper/dist/css/swiper.css"
 import HomeCategorys from './HomeCategorys.vue'
  export default {
    components:{
      HomeCategorys
    },
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
.content
  width 100%
  height 100%
  padding 100px 0
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
    /deep/.swiper-pagination-bullet
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
  .advert  //广告的样式
    width 100%
    height 127px
    img 
      width 100% 
  .shopingGui
    padding 10px 30px 30px 26px
    display flex
    flex-wrap wrap
    .shopItem
      a
        display block
        width 323px
        height 244px   
        padding 20px 0 0 20px
        margin  4px 0 0 4px
        background-color #eee
        border-radius 10px
        .title
          font-size 35px
          color #000
          padding-left 10px
        .text
          padding-left 10px
          font-size 24px 
        .pics
          img
            width 150px
            height 150px  
  .grayBox
    width 100%
    height 20px
    background-color #ccc            
</style>
