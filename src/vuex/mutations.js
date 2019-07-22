import { 
 RECIVE_LIMITSHOP, 
 RECIVE_POLICY, 
 RECIVE_NEWPRODUCTS,
 RECIVE_CATEGORYS, 
 RECIVE_SHOP_GUIDE, 
 RECIVE_PERSONAL_SHOP 
} from './mutation-types'


export default {
 [RECIVE_LIMITSHOP](state,limitShop){
  state.limitShop = limitShop
 },

 [RECIVE_POLICY](state,policy){
  state.policy = policy
 },

 [RECIVE_NEWPRODUCTS](state,newProducts){
  state.newProducts = newProducts
 },
 
 [RECIVE_CATEGORYS](state,categorys){
  state.categorys = categorys
 },

 [RECIVE_SHOP_GUIDE](state,shopGuide){
  state.shopGuide = shopGuide
 },

 //私人定制
 [RECIVE_PERSONAL_SHOP](state,personalShop){
  state.personalShop = personalShop
 },
}