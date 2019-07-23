<template>
 <div class="categoryListWrap">
   <div class="categoryContent">
      <div class="bigImg" v-if="category">
        <img :src="category.bannerUrl" alt="">
      </div>
      <ul class="categoryList" v-if="category">
        <li class="item" v-for="subCate in category.subCateList" :key="subCate.id">
          <div class="smallImg">
            <img :src="subCate.bannerUrl" alt="">
          </div>
          <p class="desc">{{subCate.name}}</p>
        </li>
      </ul>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex';
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        category:{},
      }
    },
    computed:{
      ...mapState(['categorys'])
    },
    async mounted(){
      //刷新的时候再次请求
      await this.$store.dispatch('getCategerys')
      const id = this.$route.query.id*1 
      this.category =  this.categorys.find(c=>id===c.id)
      new BScroll('.categoryListWrap',{
        scrollY:true
      })
    },
    watch:{
      $route(){
        const id = this.$route.query.id*1 
        this.category = this.categorys.find(c=>id===c.id)
      }
    },
    methods:{
     
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.categoryListWrap
 width 75%
 height 100%
 padding 30px 30px 21px
 .categoryContent
  padding-bottom 10px
  .bigImg
    width 100%
    height 192px
    margin-bottom 32px
    img 
      width 100%
      height 100%
  .categoryList
    display flex
    flex-wrap wrap
    .item
      .smallImg 
        width 144px
        height 144px
        img 
          width 100%
          height 100%
      .desc
        text-align center    
      width 144px
      height 216px
      margin-right 34px
      &:nth-child(3n)
        margin-right 0px 
            


  

  
</style>
