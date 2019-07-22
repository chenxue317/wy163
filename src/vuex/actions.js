import { reqLimitShop, reqPolicy, reqNewProducts,reqCategery, reqShoppingGuide, reqPersonalShop } from '../api' 
import {
 RECIVE_LIMITSHOP,
 RECIVE_POLICY,
 RECIVE_NEWPRODUCTS, 
 RECIVE_CATEGORYS, 
 RECIVE_SHOP_GUIDE,
 RECIVE_PERSONAL_SHOP
} from './mutation-types'
export default {
 //获取限时购列表
 async getLimitShop({commit}){
  const result = await reqLimitShop()
  if(result.code===0){
   commit(RECIVE_LIMITSHOP,result.data)
  }
 },
 //服务策略
 async getPolicy({commit}){
  const result = await reqPolicy()
  if(result.code===0){
   commit(RECIVE_POLICY,result.data)
  }
 },
 //新品首发
 async getNewProducts({commit}){
  const result = await reqNewProducts()
  if(result.code===0){
   commit(RECIVE_NEWPRODUCTS,result.data)
  }
 },
 //获取分类列表
 async getCategerys({commit}){
  const result = await reqCategery()
  if(result.code===0){
   
   commit(RECIVE_CATEGORYS,result.data)
  }
 },
 //获取商品导航
 async getShopGuide({commit}){
  const result = await reqShoppingGuide()
  if(result.code===0){
   commit(RECIVE_SHOP_GUIDE,result.data)
  }
 },
 
 //获取私人定制

 async getPersonalShop({commit}){
  const result = await reqPersonalShop()
  if(result.code===0){
   commit(RECIVE_PERSONAL_SHOP,result.data)
  }
 },


}