使用mockjs实现mock数据接口
*/
import Mock from 'mockjs'
import homeData from './homeData.json' // 自动解析为js  可以相互转换

// mock /goods接口
Mock.mock('/goods', {code: 0, data: homeData.kingKongModule.kingKongList})
// mock /ratings接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// mock /info接口
Mock.mock('/info', {code: 0, data: data.info})

// export default ???
console.log('mockServer启动了...')