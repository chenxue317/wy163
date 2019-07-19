<template>
  <div>
    <router-view></router-view>
    <FooterNav/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterNav from './components/FooterNav/FooterNav.vue'
  export default {
    components:{
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.router-link-active
  color #b4282d
 
</style>
