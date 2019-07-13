const logger = require('./logger')('正常输出');
const reportHandle = async(ctx, next)=> {
    const start = Date.now();

    await next();
    const duration = Date.now() - start;

    logger.info('[%s] %s %s (%s ms)', ctx.method, ctx.url, ctx.ip, duration);
};

module.exports = reportHandle;