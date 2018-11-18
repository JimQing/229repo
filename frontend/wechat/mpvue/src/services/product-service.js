import {request} from '../util/deliver.js'
const baseUrl = 'http://www.happymmall.com';

const product = {
    //获取商品列表
    getProductList(listParam) {
        return request({
            url     : baseUrl + '/product/list.do',
            data    : listParam
        });
    },
    getProductDetail(productId) {
        return request({
            url     : baseUrl + '/product/detail.do',
            data    : {
                productId : productId
            }
        });
    }
};

export default product;