import Home from '../pages/Home/Home.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Topic from '../pages/Topic/Topic.vue'
import Expert from '../pages/Expert/Expert.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'
import CategoryDetails from '../pages/CategoryDetail/CategoryDetail.vue'
import EmailRegester from '../pages/EmailRegester/EmailRegester.vue'
export default [
 {
  path:'/',
  component:Home,
  meta:{
   isShowFooter:true
  }
 },
 {
  path:'/category',
  component:Categorys,
  children:[
   {
    path:'/category/cateList',
    component:CategoryDetails,
    meta:{
     isShowFooter:true
    }
   }
  ],
  meta:{
   isShowFooter:true
  }
 },
 {
  path:'/topic',
  component:Topic,
  meta:{
   isShowFooter:true
  }
 },
 {
  path:'/expert',
  component:Expert,
  meta:{
   isShowFooter:false
  }
 },
 {
  path:'/cart',
  component:Cart,
  meta:{
   isShowFooter:true
  }
 },
 {
  path:'/profile',
  component:Profile,
  meta:{
   isShowFooter:false
  }
 },
 {
  path:'/emailRegister',
  component:EmailRegester,
  meta:{
   isShowFooter:false
  }
 }
 
]