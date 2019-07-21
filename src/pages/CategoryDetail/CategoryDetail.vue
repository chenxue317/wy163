<template>
 <div class="categoryListWrap">
   <div class="bigImg" v-if="category">
     <img :src="category.bannerUrl" alt="">
   </div>
   <ul class="categoryList">
     <li class="item" v-for="subCate in category.subCateList" :key="subCate.id">
       <div class="smallImg">
         <img :src="subCate.bannerUrl" alt="">
       </div>
       <p class="desc">{{subCate.name}}</p>
     </li>
   </ul>
 </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        category:{},
        id : 1
      }
    },
    computed:{
      ...mapState(['categorys'])
    },
    async mounted(){
      await this.$store.dispatch('getCategerys')
      this.id = this.$route.query.id*1 
      const category = this.categorys.find(c=>this.id===c.id)
      this.category = category
    },
    watch:{
      '$route': 'fetchData'
    },
    methods:{
      fetchData(){
        this.id = this.$route.query.id*1 
        const category = this.categorys.find(c=>this.id===c.id)
        this.category = category
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.categoryListWrap
 width 75%
 height 100%
 padding 30px 30px 21px
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
