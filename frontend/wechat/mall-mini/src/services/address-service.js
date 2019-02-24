import {request} from '../utils/deliver.js'
const baseUrl = 'https://jimqing.xin';

const Address = {
    //获取地址列表
    getAddressList() {
        return request({
            url     : baseUrl + '/shipping/list.do',
            data    : {
                pageSize : 50
            }
        });
    },
    save(addressInfo) {
        return request({
            url     : baseUrl + '/shipping/add.do',
            data    : addressInfo
        });
    },
    // 更新收件人
    update() {
        return request({
            url     : baseUrl + '/shipping/update.do',
            data    : addressInfo
        });
    },
    selectAddress(shippingId) {
        return request({
            url     : baseUrl + '/shipping/select.do',
            data    : {
                shippingId  : shippingId
            }
        });
    },
    // 删除地址信息
    deleteAddress(shippingId) {
        return request({
            url     : baseUrl + '/shipping/del.do',
            data    : {
                shippingId  : shippingId
            }
        });
    }
};

export default Address;