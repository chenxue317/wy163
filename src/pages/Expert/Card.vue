<template>
  <div>
   <div class="card">
    <div class="top">
     <h2 class="title">
      <span>建议征集</span>
      <span class="iconfont icon-arrow"></span>
     </h2>
     <p class="dsc">告诉我们，你的好物标准</p>
    </div>
    <div class="middle">
      <div class="img">
       <img src="https://yanxuan.nosdn.127.net/fdcfa17b26d048eacb4ea087bb678345.jpg?imageView&quality=75&thumbnail=272x200" alt="">
      </div>
      <div class="info">
       <p class="problem">你希望严选推出哪些方便菜肴呢？</p>
       <div class="advise">
        <div class="left">
         <i class="iconfont icon-view"></i>
         <span>0条建议</span>
        </div>
        <div class="right">
         <i class="iconfont icon-view"></i>
         <span>230人看过</span>
        </div>
       </div>
      </div>
    </div>
    <div class="bottom">
     <p>
      如果我们推出方便菜肴，你会希望有哪些口味呢？比如酸甜口味、香辣口味、咖喱口味或者其他口味；希望推出1人份还是多人份？希望是加热即食还是可以简单烹饪？你对严选的方便菜肴还有哪些期待呢？快来说说吧
     </p>
    </div>
    <div class="btn">
     我要建议
    </div>
   </div>
   <div class="box"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .card
  width 100%
  height 742px
  padding 0 15px 20px
  box-sizing border-box
  .top
   height 72px
   padding 34px 0
   background-color #fff
   .title
    display flex
    align-items center
    justify-content center
    font-size 32px
    margin-bottom 12px
   .dsc
    text-align center
    color #7f7f7f
  .middle
   padding 24px 0 24px 24px
   height 200px
   background-color #eee
   display flex
   .img
    img 
     width 272px
     height 200px
   .info
    padding 40px 0 20px 20px
    .problem
     font-size 32px
     margin-bottom 14px
    .advise
     display flex
     color #7f7f7f
     align-items center
     i 
      margin-right 10px
     .left
      margin-right 32px
      display flex
      align-items center
     .right
      font-size 24px
      display flex
      align-items center
  .bottom
   margin-top 32px
   p
    line-height 40px
    color #7f7f7f
    font-size 24px
  .btn  
   height 88px
   text-align center
   line-height 88px
   border  1px solid #ccc
   margin-top 40px 
 .box
  width 100%
  height 20px
  background-color #f7f7f7   

      


</style>
