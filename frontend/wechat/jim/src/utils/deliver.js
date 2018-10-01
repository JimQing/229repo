const Promise = require('es6-promise').Promise;
const baseUrl = '';

// 之后将这个函数挂载到vue实例上，使用this,$request去调用
export function request(params) {
    return new Promise((resolve, reject)=> {
        wx.request({
            url: baseUrl + params.url, //仅为示例，并非真实的接口地址
            data: params.data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                console.log(res.data);
                resolve(res.data);
            },
            error(err) {
                console.log(err);
                reject(err);
            }
        })
    });
}
