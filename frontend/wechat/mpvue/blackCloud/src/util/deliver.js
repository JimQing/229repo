const Promise = require('es6-promise').Promise;

// 之后将这个函数挂载到vue实例上，使用this,$request去调用
export function request(params) {
    return new Promise((resolve, reject)=> {
        wx.request({
            url: params.url, //仅为示例，并非真实的接口地址
            data: params.data,
            methods: params.methods || 'get',
            success(res) {
                console.log(res);
                resolve(res.data);
            },
            error(err) {
                console.log(err);
                reject(err);
            }
        })
    });
}
