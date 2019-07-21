import ajax from './ajax'
//请求限时购
export const reqLimitShop = ()=> ajax('/limitShop')
//请求服务
export const reqPolicy = () => ajax('/policy')
//请求新品
export const reqNewProducts = () => ajax('/newProducts')
//获取分类列表
export const reqCategery = () => ajax('/category')
