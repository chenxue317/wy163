<template>
  <div class="searchWrap">
    <div class="search">
      <div class="input">
       <i class="iconfont icon-search"></i>
      <input type="text" v-model="keywordPrefix"
      :placeholder="hotSearch.defaultKeyword &&hotSearch.defaultKeyword.keyword">
      </div>
      <span @click="$router.push('/')">取消</span>
    </div>
    <div v-if="!keywordPrefix">
      <HistorySearch :historyKeyWord='historyKeyWord' v-if="historyKeyWord.length"/>
      <HotSearch/>
    </div>
    <div v-if="keywordPrefix" class="searchKeyContent">
      <ul class="searchList">
        <li class="item" v-for="(item,index) in keywordSearch" :key="index">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HistorySearch from './HistorySearch.vue'
  import HotSearch from './HotSearch.vue'
  import { Search } from 'mint-ui'
  import { mapState } from 'vuex';
import { setTimeout, clearTimeout } from 'timers';
  export default {
    data() {
      return {
        keywordPrefix: '',
        historyKeyWord:[]
      }
    },
   computed:{
    ...mapState(['hotSearch','keywordSearch']),
    //搜索列表
    
   },
   watch:{
     keywordPrefix(val){
       if(this.timeId){
         clearTimeout(this.timeId)
       }
      this.timeId = setTimeout(()=>{
        this.$store.dispatch('getKeyWordSearch',val)
      },300)
      

    }
   },
   components:{
    HistorySearch,
    HotSearch
   },
   mounted(){
    this.$store.dispatch('getHotSearch')
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .searchWrap
  height 100%
  background-color #eee
  overflow hidden
  .search
   width 100%
   height 60px
   line-height 60px
   display flex
   background-color #fff
   padding 20px
   .input
    background-color #eee
    width 80%
    padding 0 10px
    border-radius 10px
    .iconfont
     font-size 20px
     margin-right 10px
    input 
     outline none 
     border none 
     background-color transparent
   span 
    font-size 30px
    margin-left 15px
  .searchKeyContent
    width 100%
    padding 20px
    background-color #fff 
    box-sizing border-box 
    .item
      height 80px
      line-height 80px
      border-bottom 1px solid #eee
      &:last-child
        border none
      a
        color #333  

 
</style>
