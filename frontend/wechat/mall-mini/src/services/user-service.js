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
    //用户登录
    login(userInfo){
        return request({
            url     : baseUrl + '/user/login.do',
            data    : userInfo,
            method  : 'post'
        });
    },
    //检查登录状态
    checkLogin(){
        return request({
            url     : baseUrl + '/user/get_user_info.do',
            method  : 'post'
        });
    },
    //注册
    register(userInfo){
        return request({
            url     : baseUrl + '/user/register.do',
            data    : userInfo,
            method  : 'post'
        });
    },
    //校验用户信息
    checkUsername(listParam){
        return request({
            url     : baseUrl + '/user/check_valid.do',
            data    : listParam
        });
    }
}
export default User;
