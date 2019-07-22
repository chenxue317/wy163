import { RECIVE_LIMITSHOP, RECIVE_POLICY, RECIVE_NEWPRODUCTS,RECIVE_CATEGORYS } from './mutation-types'


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
 }

}