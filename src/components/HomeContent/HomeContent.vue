<template>
  <div class="content">
    <div class="swiper-container bigSwiper">
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
      <li class="item" v-for="(p,index) in policy" :key="index">
        <i :style="{backgroundImage:`url(${p.icon})`}"></i>
        <span>{{p.desc}}</span>
      </li>
      
    </ul>
    <NewProducts :newProducts="newProducts"/>
    <!-- 广告栏 -->
    <div class="advert">
      <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
    </div>
    <div class="shopingGui">
      <div class="shopItem" v-for="(shop,index) in shopGuide" :key="index">
        <a href="javascript:;">
          <p class="title">{{shop.styleItem.title}}</p>
          <p class="text">{{shop.styleItem.desc}}</p>
          <div class="pics">
            <div class="picItem" v-for="(pic,index) in shop.styleItem.picUrlList" :key="index">
              <img :src="pic" alt="">
            </div>
            
          </div>
        </a>
      </div>
    </div>
    <!-- 私人定制轮播图 -->
    <div class="plivateMade">
      <h2 class="title">私人定制</h2>
      <div class="swiper-container plivate-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pI,index) in PersonalItem" :key="index">
            <ul class="goodsList">
              <li class="item" v-for="(item,index) in pI" :key="index">
                <a href="javascript:;">
                  <div class="imgContainer">
                    <img :src="item.listPicUrl" alt="">
                  </div>
                  <div class="dsc">
                    <span>{{item.name}}</span>
                    <span class="price">￥{{item.retailPrice}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination plivate-pagination"></div>
      </div>
    </div>
    <!-- 限时购 -->
    <LimitedShops :limitShopObj="limitShop"/>
  </div>
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper'
 import "swiper/dist/css/swiper.css"
 import NewProducts from './NewProducts.vue'
 import LimitedShops from '../LimitedShop/LimitedShop.vue'
 import {RECIVE_POLICY} from '../../vuex/mutation-types'
 import {mapState} from 'vuex'

  export default {
    
    computed:{
      ...mapState(['limitShop','policy','newProducts','shopGuide','personalShop']),
      //根据大数组拆分小数组,每三个每三个成为一组
      PersonalItem(){
        const {personalShop} = this
        let smallArr = []
        let bigArr = []
        personalShop.forEach(shop => {
          smallArr.push(shop)
          if(smallArr.length===3){
            bigArr.push(smallArr)
            smallArr=[]
          }
        });
        return bigArr
      }
    },
    components:{
      NewProducts,
      LimitedShops
    },
    async mounted(){
      const promiseArr = [
        //获取限时购
        this.$store.dispatch('getLimitShop'),
        //获取服务策略
        this.$store.dispatch('getPolicy'),
         //获取新品
        this.$store.dispatch('getNewProducts'),
        //获取商品导航
        this.$store.dispatch('getShopGuide'),
        //获取私人定制
        this.$store.dispatch('getPersonalShop')
      ]
      await Promise.all(promiseArr)
      
      //上面的轮播图
      const bigSwiper = new Swiper('.bigSwiper',{
        loop: true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination'
        }
        },
      )
      //小图轮播图
      const plivateSwiper = new Swiper('.plivate-swiper',{
        loop: true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      )
      
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.content
  width 100%
  height 100%
  padding 150px 0
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
      display flex
      align-items center
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
          margin-bottom 10px
        .text
          padding-left 10px
          font-size 24px 
        .pics
          display flex
          margin-top 10px
          width 100%
          justify-content space-between
          .picItem
            img
              width 150px
              height 150px  
  .plivateMade//私人定制
    height 510px
    &::after
      content ''
      display block
      width 100%
      height 20px
      background-color #eee
    &::before
      content ''
      display block
      width 100%
      height 20px
      background-color #eee  
    .title 
      height 100px
      line-height 100px
      padding 0 20px
      width 128px
      font-size 32px
    .plivate-swiper
      height 310px
      padding-bottom 50px
      /deep/.swiper-pagination
        bottom 30px
        /deep/.swiper-pagination-bullet
          width 12px
          height 12px
          background-color #b4282d
          border-radius 50%

      .swiper-slide
        .goodsList
          display flex
          .item
            margin-left 20px
            width 216px
            .imgContainer
              background-color #ccc
              margin-bottom 12px
              img 
                width 216px
                height 216px
            .dsc
              width 216px
              padding 0 10px
              box-sizing border-box
              font-size 18px
              .price
                color #b4282d




</style>
