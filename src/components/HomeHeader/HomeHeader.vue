<template>
  <div>
    <!-- 主页头部 -->
    <div class="homeHeader">
      <span class="wy"></span>
      <input type="text" :placeholder="icon" class="search iconfont">
      <div class="login">登录</div>
    </div>
    <!-- 主页导航栏 -->
    <div class="navContainer">
      <ul class="headerNav" v-show="!isShowDetail">
        <li v-for="(catergory,index) in catergorys" :key="index" class="navItem" 
        :class="{active:index===currentIndex}"
        @click="toggle(index)">
          <a href="javascript:;">{{catergory}}</a>
        </li>
      </ul> 
      <!-- 主页下拉菜单导航栏 -->
      <h1 class="allCategory" v-show="isShowDetail">全部频道</h1>
      <div class="toggle" @click="showDetail">
        <div class="icon" :class="openOrClose">
          <span class="iconfont icon-arrowdown" ></span>
        </div>
        
      </div>  
      
    </div>
    <!-- 主页下拉菜单 -->
    <div class="detailList" v-show="isShowDetail">
      <a v-for="(category,index) in catergorys" :key="index" :class="{active:index===currentIndex}">
        {{category}}
      </a>
    </div>
    <div class="mask" v-show="isShowDetail" @click="closeDetail"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { close } from 'fs';
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
     this.bs = new BScroll('.navContainer', {
       probeType: 3,
       scrollX:true,
       click:true,
       
     })
    },
    methods:{
      //点击箭头，切换下拉菜单的显示
      showDetail(){
        const isShowDetail = !this.isShowDetail
        //改变显示状态
        this.isShowDetail= isShowDetail
        if(isShowDetail){
          this.openOrClose = 'open'
        }else{
          this.openOrClose = 'close'
        }
      },
      closeDetail(){
        this.isShowDetail=false
        this.openOrClose = 'close'
      },
      toggle(index){
        //点击切换，将当前点击的index给currentIndex切换样式
        let lis = document.querySelectorAll('.headerNav>li')
        this.currentIndex = index
        this.bs.scrollToElement(lis[index],500)
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
    position fixed
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
    position fixed
    top 88px
    z-index 20
    height 60px
    background-color #fff
    display flex
    margin-left 20px 
    .headerNav
      display flex
      height 60px
      padding-right 160px
      position absolute
      z-index 20
      .navItem
        height 100%
        line-height 60px
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
    top 140px
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
