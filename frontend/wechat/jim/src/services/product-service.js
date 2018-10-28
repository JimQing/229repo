import {request} from '../util/deliver.js'
const product = {
    //获取商品列表
    getProductList(listParam) {
        return request({
            url     : '/product/list.do',
            data    : listParam
        });
    },
    getProductDetail(productId) {
        return request({
            url     : '/product/detail.do',
            data    : {
                productId : productId
            }
        });
    }
};

export default product;