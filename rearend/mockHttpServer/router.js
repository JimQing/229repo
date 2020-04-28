const router = require('koa-router')();
const send = require('koa-send');

router
    .all('/*', async (ctx, next)=> {
        ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
        ctx.set('Content-Type', 'application/json;charset=utf-8');
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
        ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.set('Access-Control-Allow-Credentials', 'true');
        ctx.set('Cache-Control', 'max-age=10');
        ctx.set('Last-Modified', 'Mon Feb 11 2019 10:53:06 GMT');
        // 遇到options请求返回200
        if (ctx.request.method === 'OPTIONS') {
            ctx.status = 200;
        } else {
            await next();
        }
    })
    .get('/', (ctx, next) => {
        ctx.body = {data: 'get request from /!'};
    });

// get 请求获取静态资源（下载）
router.get('/static/:name', async ctx=> {
    const name = ctx.params.name;
    const path = `./image/${name}`;
    ctx.attachment(path);
    await send(ctx, path);
});

// router get方法
router.get('/test', (ctx, next) => {
    console.log('in test');
    ctx.body = {
        word: 'get request from /test!'
    };
    // 通过next走下一个函数
    // next();
});
// }, ctx => {
//     ctx.body += '。。。 /test2!';
// });

// router post方法
router.post('/post', ctx=> {
    ctx.body = 'get request from /post!';
});

// 链式写法
router
    .get('/', (ctx, next) => {
        ctx.body = 'get request from /!';
    })
    .get('/get', (ctx, next) => {
        ctx.body = 'get request from /get!';
        // 通过next走下一个函数
        next();
    }, ctx => {
        ctx.body += '。。。 /test2!';
    })
    .post('/post', ctx=> {
        ctx.body = 'get request from /post!';
    });

module.exports = router;