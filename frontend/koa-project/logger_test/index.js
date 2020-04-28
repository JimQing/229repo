const Koa = require('koa');
const app = new Koa();
const router = require('./router.js');
const koaBody = require('koa-body');

app.use(koaBody({
        jsonLimit: '1mb',
        formLimit: '1mb',
        formidable: {
            maxFileSize: 200*1024*1024
        },
        multipart: true
    }
));

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);