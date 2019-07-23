import { 
 RECIVE_LIMITSHOP, 
 RECIVE_POLICY, 
 RECIVE_NEWPRODUCTS,
 RECIVE_CATEGORYS, 
 RECIVE_SHOP_GUIDE, 
 RECIVE_PERSONAL_SHOP, 
 RECIVE_TOPIC,
 RECIVE_HOTSEARCH,
 RECIVE_KEYWORD_SEARCH
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

 //
 [RECIVE_TOPIC](state,topic){
  state.topic = topic
 },

 [RECIVE_HOTSEARCH](state,hotSearch){
  state.hotSearch = hotSearch
 },

 [RECIVE_KEYWORD_SEARCH](state,keywordSearch){
  state.keywordSearch = keywordSearch
 },
}