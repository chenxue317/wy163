<template>
  <div class="cContainer">
   <Search/>
   <div class="category">
     <ul class="categorys">
        <li v-for="(category,index ) in categorys" :key="category.id" 
        :class="{active:index===currentIndex}"
        @click="toggleCategory(index,category.id)">
          <a href="javascript:;">
            {{category.name}}
          </a>
        </li>
     </ul>
     <router-view></router-view>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Search from './Search.vue'
  import CategoryDetail from '../CategoryDetail/CategoryDetail'
  import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState(['categorys'])
    },
    data() {
      return {
        currentIndex:0,
        }
    },
    async mounted(){
      this.$store.dispatch('getCategerys')
      this.$router.push('/category/cateList?id=1022001')
    },
    methods:{
      toggleCategory(index,id){
        this.currentIndex = index
        
        this.$router.push('/category/cateList?id='+id)
      }
    },
    components:{
      Search,
      CategoryDetail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cContainer
    width 100%
    height 100%
    .category
      width 100%
      height 1148px
      display flex
      padding 88px 0 50px
      .categorys
        width 25%
        padding 40px 0
        li
          margin-bottom 40px
          height 50px
          width 162px
          text-align center
          line-height 50px
          position relative
          &.active
            &::after
              content ''
              position absolute
              left 0
              top 0
              width 4px
              height 100%
              background-color #b4282d
            a
              color #b4282d
          a
            font-size 28px
            color #333
</style>
