<template>
  <form>
    <div class="phoneNum">
      <input type="text" :placeholder="method===2?'邮箱账号':'请输入手机号'" v-model="account" :maxlength="method===0?'11':'22'">
      
    </div>
    <div class="code">
       <input type="text" :placeholder="method===0?'请输入短信验证码':'请输入密码'" v-model="pwd">
       <div class="getCode" v-show="method===0">
         获取验证码
       </div>
    </div>
    <span class="msg" v-if="msg">{{msg}}</span>
    <span class="problemOrNote">
      <span class="problem">{{text}}</span>
      <span class="note" @click="changeMethod">{{text2}}</span>
     
    </span>
    <button class="login-btn" @click="login">
      <span>登录</span>
    </button>
     <button class="other-btn" @click="otherLogin">
      <span>其他方式登录</span>
    </button>
   
  </form>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      method:Number,// 0 默认为手机验证码登录 1手机短信登录 2邮箱登录
      updatedIsShow:Function,
      updatedMethod:Function
    },
    data() {
      return {
        account:'',
        pwd:'',
        msg:''
      }
    },
    methods:{
      changeMethod(){
        this.updatedMethod()
      },
      otherLogin(){//其他方式登录，改变父组件的状态--
        this.updatedIsShow()
      },
      verifyPhoneAndCode(){
        //手机号验证
        if(!this.account){
          this.msg='手机号不得为空'
          return
        }
        let regPhone = /^1[3-9]\d{9}$/
        if(!regPhone.test(this.account)){
          this.msg = '手机号格式不正确'
          return
        } 
        //验证码验证
        if(!this.pwd){
          this.msg ='验证码不得为空'
          return
        }
        let regCode = /[0-9]{6}/
        if(!regCode.test(this.pwd)){
          this.msg='验证码格式不正确'
          return
        }
        if(regPhone.test(this.account) && regCode.test(this.pwd)){
          this.msg = ''
        }
      },
      verifyEmailAndPwd(){
        //手机号验证
        if(!this.account){
          this.msg='邮箱不得为空'
          return
        }
        ///^\w+@[a-z0-9]+\.[a-z]{2,4}$/  
        let regEmail = /\w{4,11}@[0-9a-z]{2,4}\.[0-9a-z]{2,3}$/
        if(!regEmail.test(this.account)){
          this.msg = '邮箱格式不正确'
          return
        } 
        //密码验证
        if(!this.pwd){
          this.msg ='密码不得为空'
          return
        }
        let regPwd = /[0-9a-zA-z]{6,9}/
        if(!regPwd.test(this.pwd)){
          this.msg='密码格式不正确'
          return
        }
        if(regPhone.test(this.account) && regCode.test(this.pwd)){
          this.msg = ''
        }
      },
      login(){
        /* 1、不得为空
            2、当为手机号的时候需要满足手机号的格式
         */
        if(this.method===0 || this.method===1){
          this.verifyPhoneAndCode()
        }else if(this.method===2){
          this.verifyEmailAndPwd()
        }
      }
    },
    computed:{
      text(){
        if(this.method===0){
          return '遇到问题？'
        }else if(this.method===1){
          return '忘记密码'
        }else{
          return '注册账号'
        }

      },
      text2(){
        if(this.method===0){
          return '使用短信密码登录'
        }else if(this.method===1){
          return '使用短信验证码登录'
        }else{
          return '忘记密码'
        }

      }
    },
    watch:{
      account(){
        
        
      }
    }
    

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 form 
  margin-top 104px
  padding 0 40px
  div
    width 670px
    height 90px
    margin 0 auto
    line-height 90px
    border-bottom 1px solid #ccc
  .phoneNum  
    margin-bottom 32px 
  input
    height 44px  
    width 100%
    font-size 28px
    outline none
    padding-left 10px
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
  .problemOrNote
    display flex
    justify-content space-between 
    align-items center
    height 90px
    font-size 30px
    .problem
      color #7f7f7f
    .note  
      color #000 
  .login-btn
    width 100%
    height 90px
    background-color #b4282d
    border none
    color #fff  
    margin-top 20px
    font-size 28px      
  .other-btn
    width 100%
    height 90px
    background-color #fff
    border 1px solid #b4282d
    color #b4282d 
    margin-top 20px 
    font-size 28px
  .msg
    display block
    margin-top 20px
    font-size 28px
    color red

</style>
