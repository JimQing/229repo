const Koa = require('koa');
const app = new Koa();
const router = require('./router.js');
const middleware = require('./logger/index');

app.use(middleware);


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);