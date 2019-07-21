import Home from '../pages/Home/Home.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'
import CategoryDetails from '../pages/CategoryDetail/CategoryDetail.vue'
export default [
 {path:'/',component:Home},
 {
  path:'/category',
  component:Categorys,
  children:[
   {
    path:'/category/cateList',
    component:CategoryDetails
   },
   /* {path:'/category/cateList',
    redirect:'/category/cateList?id=1022001'
   } */
   
  ]
 },
 {path:'/topic',component:Topic},
 {path:'/expert',component:Expert},
 {path:'/cart',component:Cart},
 {path:'/profile',component:Profile},
 
]