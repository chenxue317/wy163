<template>
  <div class="cartContainer">
    <div class="cart-header">
      <div class="content">
        <h2>购物车</h2>
        <span>领券</span>
      </div>
      
    </div>
    <div class="main">
        <div class="serve">
          <ul class="detail">
            <li class="item">
              <i class="iconfont icon-circle1"></i>
              <span>30天无忧退款</span>
            </li>
            <li class="item">
              <i class="iconfont icon-circle1"></i>
              <span>48小时快速退款</span>
            </li>
            <li class="item">
              <i class="iconfont icon-circle1"></i>
              <span>满88免邮费</span>
            </li>
          </ul>
        </div>
        <div class="cart">
          <div class="img">
            <i class="iconfont icon-cart"></i>
            <p class="txt">去添加点什么吧</p>
          </div>
          
          <div class="btn" @click="$router.push('/profile')">登录</div>  
        </div>
        
      </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cartContainer
  width 100%
  height 100%
  background-color #eee
  .cart-header
    height 88px
    display fixed
    left 0
    top 0
    background-color #fff
    .content
      width 100%
      padding 0 30px
      display flex
      justify-content space-between
      box-sizing border-box
      line-height 88px
      height 88px
      h2
        font-size 36px
      span 
        font-size 30px
        color #b4282d 
  .main
    width 100%
    height 100%
    .serve
      background-color #ccc
      .detail
        display flex
        height 70px
        align-items center
        .item
          width 33%
          text-align center
          
          i 
            font-size 10px
    .cart
      width 100%
      height 300px
      .img
        width 248px
        height 248px
        position absolute
        left  0
        top 0
        bottom 0
        right 0
        margin auto
        color #7f7f7f
        .iconfont 
          font-size 180px
        .txt
          text-align center
          margin-top 20px 
      .btn
        width 480px
        height 92px
        line-height 92px
        text-align center
        font-size 32px
        background #b4282d
        position absolute
        left 0
        right 0
        bottom 0
        top 450px
        margin auto
        color #fff


 
</style>
