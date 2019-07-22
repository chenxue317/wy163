<template>
  <div class="profileContainer">
   <TopicHeader/>
   <div class="content" v-if="isShow===0">
     <h2 class="logo">
       <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
     </h2>
     <div class="btns">
       <a href="javascript:;" class="phone-login active" @click="phoneLogin">
         <i class="iconfont icon-phone"></i>
         <span>手机号码登录</span>
       </a>
        <a href="javascript:;" class="pwd-login" @click="emailLogin">
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
       </a>
     </div>
     <div class="phone-link" @click="isShow=2">
       <a href="javascript:;">
         <span>手机号快速注册</span>
         <i class="iconfont icon-arrow"></i>
       </a>
     </div>
     <!-- 登录方式 -->
     <div class="ways">
      <ul class="main">
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-wchart"></i>
            <span>微信</span>
          </a>
        </li>
        <li class="item itemqq">
          <a href="javascript:;">
            <i class="iconfont icon-qq"></i>
            <span>QQ</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </a>
        </li>
      </ul>
    </div>
   </div>
   <!-- 手机号登录页面 -->
   <div class="phoneContent" v-if="isShow===1">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <Form :method="method" :updatedIsShow="updatedIsShow" :updatedMethod="updatedMethod"/>
       <span class="register" v-show="method!==2" @click="isShow=2">
        <span>注册账号</span>
        <i class="iconfont icon-arrow"></i>
      </span>
   </div>
   <!-- 注册页面显示 -->
   <div class="registerContent" v-if="isShow===2">
     <h2>手机号注册</h2>
     <form>
       <div class="phone">
          <input type="text" placeholder="请输入手机号">
       </div>
       <div class="code">
          <input type="text" placeholder="请输入短信验证码">
          <div class="getCode">
            获取验证码
          </div>
       </div>
       <div class="pwd">
          <input type="text" placeholder="请输入密码">
       </div>
       <button class="res-btn">
         <span>注册</span>
       </button>
     </form>
     <!-- 注册条款 -->
     <div class="rules">
       <div class="checkbox" :class="{active:isChecked}" @click="isChecked=!isChecked">
         <i class="iconfont icon-duigou"></i>
       </div>
        <div class="rule-link">
          <span>我已同意</span>
          <a href="javascript:;">《服务条款》</a>
          <span>和</span>
          <a href="javascript:;">《网易隐私政策》</a>
        </div>
     </div>
     <div class="emailRegister" @click="$router.replace('/emailRegister')">
       <span>邮箱账号注册</span>
       <i class="iconfont icon-arrow"></i>
     </div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopicHeader from '../../components/TopicHeader/TopicHeader.vue'
  import Form from './Form.vue'
  export default {
    data() {
      return {
        isShow: 0, //0默认显示登录界面 1为手机登录界面 2为注册页面
        method:0, //登录方式，默认为手机号登录
        isChecked:false
      }
    },
    methods:{
      phoneLogin(){
        //首先将isshow改为1，手机登录界面显示
        //将方式传递过去 method===0
        this.method = 0
        this.isShow = 1
      },
      //页面的显示（phoneContent/content）
      updatedIsShow( ){
        this.isShow = 0
      },
      //点击去到邮箱登录页面
      emailLogin(){
        this.isShow = 1
        this.method = 2
      },
      updatedMethod(){
        //改变传入的method的值，因为再内部不可以更改method的值
        if(this.method === 0){
          this.method = 1
        }else if(this.method === 1){
          this.method = 0
        }
      }
    },
    components:{
      TopicHeader,
      Form
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profileContainer
    
    height 100%
    .content
      padding-top 100px
      height 100%
      position relative
      background-color #f7f7f7
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
      .ways
        width 100%
        position absolute
        left 0
        bottom 150px
        .main
          display flex
          justify-content center
          align-items center
          .item
            width 108px
            height 40px
            padding 0 40px
            
            &:nth-child(2)
              border-left 1px solid #7f7f7f
              border-right 1px solid #7f7f7f
            a
              display flex
              align-items center
              .iconfont
                margin-right 10px
                font-size 38px
              .icon-qq 
                font-size 42px
    .phoneContent
      height 100%
      padding-top 100px
      .logo
        width 100%
        height 66px
        margin-top 56px
        text-align center
        img 
          height 100%
      .register
        display flex
        justify-content center
        align-items center
        margin-top 20px
        color #333 
    .registerContent  
      padding-top 100px  
      h2 
        padding-top 40px
        text-align center
        font-size 34px
      form
        padding 150px 40px 0
        div
          width 670px
          height 90px
          margin 0 auto
          line-height 90px
          border-bottom 1px solid #ccc 
          input
            height 44px  
            width 100%
            font-size 28px
            outline none
            padding-left 10px
        .phone
          margin-bottom 32px    
        .code  
          position relative
          .getCode 
            position absolute
            top 20px
            right 0
            width 168px
            height 56px
            line-height 56px
            font-size 28px
            text-align center
            border 1px solid #7f7f7f
            border-radius 10px 
        .res-btn
          width 100%
          height 90px
          background-color #b4282d
          color #fff
          border none 
          margin-top 30px   
      .rules
        padding 0 40px
        margin-top 20px
        display flex
        align-items center
        .checkbox
          width 30px
          height 30px
          border 1px solid #ccc
          margin-right 20px
          color #fff
          &.active
            color #333
        .rule-link
          a
            color #007AFF 
      .emailRegister
        display flex
        align-items center
        justify-content center
        margin-top 60px 
 
      
</style>
