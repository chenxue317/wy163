<template>
  <div>
    <div class="homeHeader">
      <span class="wy"></span>
      <input type="text" :placeholder="icon" class="search iconfont">
      <div class="login">登录</div>
    </div>
    <div class="navContainer">
      <ul class="headerNav" v-show="!isShowDetail">
        <li v-for="(catergory,index) in catergorys" :key="index" class="navItem" :class="{active:index===currentIndex}">
          <a href="javascript:;">{{catergory}}</a>
        </li>
      </ul> 
      <h1 class="allCategory" v-show="isShowDetail">全部频道</h1>
      <div class="toggle" @click="showDetail">
        <div class="icon" :class="openOrClose">
          <span class="iconfont icon-arrowdown" ></span>
        </div>
        
      </div>  
      
    </div>
    <div class="detailList" v-show="isShowDetail">
      <a v-for="(category,index) in catergorys" :key="index" :class="{active:index===currentIndex}">

        {{category}}
      </a>
    </div>
    <div class="mask" v-show="isShowDetail" @click="isShowDetail=!isShowDetail"></div>
    
    
     

    
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        icon: '\ue60c 搜索好物，共21756款好物',
        catergorys: [
          "推荐",
          "居家生活",
          "服饰鞋包",
          "美食酒水",
          "个护清洁",
          "母婴亲子",
          "运动旅行",
          "数码家电",
          "全球特色"
          ],
        isShowDetail:false,//用来标注蒙版以及下拉菜单的展开，false下拉菜单不打开
        currentIndex:0,//用来标注导航第几个元素选中，默认0被选中
        openOrClose:'',//用来标注小箭头的样式，open为向上，close向下
        
      
      }
    },
    mounted(){
     new BScroll('.navContainer', {
       probeType: 3,
       scrollX:true,
       click:true,
       
     })
    },
    methods:{
      showDetail(){
        const isShowDetail = !this.isShowDetail
        //改变显示状态
        this.isShowDetail= isShowDetail
        if(isShowDetail){
          this.openOrClose = 'open'
        }else{
          this.openOrClose = 'close'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.homeHeader
  width 100%
  display flex
  align-items center
  padding 20px
  height 88px
  box-sizing border-box
  position relative
  z-index 99
  background-color #fff
  .wy
    width 138px
    height 40px
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
    background-size 100% 100%
  .search
    margin 0 20px
    width 63%
    height 56px
    background-color #eee
    border-radius 15px
    text-align center
    font-size .37333rem
  .login
    border 1px solid #b4282d
    font-size 24px
    color #b4282d
    width 74px
    height 40px
    line-height 40px
    text-align center
.navContainer
  width 100%
  overflow hidden
  white-space nowrap
  position relative
  z-index 20
  height 60px
  background-color #fff
  .headerNav
    display inline-block
    height 60px
    width 1460px
    padding-right 160px
    position absolute
    z-index 20
    .navItem
      display inline-block
      height 100%
      line-height 60px
      float left
      flex-shrink 0
      font-size .37333rem
      padding 0 .21333rem
      margin-left 20px
      &.active
        border-bottom 1px solid #b4282d
        a
          color #b4282d
  .toggle
    position absolute
    top 0
    right 0
    width 160px
    height 60px  
    background-color #fff 
    text-align center
    line-height 60px
    font-size 30px
    color #ccc 
    z-index 20
    .icon
      transition transform 0.5s
      &.close
        transform rotate(0deg)
      &.open
        transform rotate(180deg) 
  .allCategory
    height 60px
    line-height 60px  
    padding 0 20px 
.detailList
  display flex
  flex-wrap wrap
  padding-top 24px
  position absolute
  z-index 20
  background-color #fff
  a 
    width 150px
    height 56px
    margin 0 0 40px 30px
    border 1px solid #ccc
    line-height 56px
    text-align center
    color #000
    &.active
      border 1px solid #b4282d
      color #b4282d  
.mask
  position fixed
  bottom   0
  top 0
  right 0
  left 0
  margin auto
  background-color rgba(0,0,0,.5)
  z-index 10

    
</style>
