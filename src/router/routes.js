import Home from '../pages/Home/Home.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import General from '../pages/General/General.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
 {path:'/',component:Home},
 {path:'/category',component:Categorys},
 {path:'/topic',component:General},
 {path:'/cart',component:Cart},
 {path:'/profile',component:Profile}
]