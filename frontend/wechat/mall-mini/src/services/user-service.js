import {request} from '../utils/deliver.js'
const baseUrl = 'https://jimqing.xin';

const User = {
    // 获取用户信息
    onRegister(listParam) {
        return request({
            url     : baseUrl + '/user/register.do',
            data    : listParam
        });
    },
    //获取用户信息
    getUserInfo(listParam){
        return request({
            url     : baseUrl + '/user/get_information.do',
            data    : listParam
        });
    },
    //校验用户信息
    checkUsername(listParam){
        return request({
            url     : baseUrl + '/user/check_valid.do',
            data    : listParam
        });
    },
}