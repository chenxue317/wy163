import Mock from 'mockjs';
import homeData from './datas/homeData.json';
import categoryData from './datas/category.json'

Mock.mock('/limitShop', {code: 0, data: homeData.flashSaleModule.itemList});
Mock.mock('/policy', {code: 0, data: homeData.policyDescList});
Mock.mock('/newProducts', {code: 0, data: homeData.newItemList});
Mock.mock('/category', {code: 0, data: categoryData.categoryL1List});

