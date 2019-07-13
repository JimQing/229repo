const logger = require('./logger')('报错了');
const errorHandle = async (ctx, next)=> {
    try {
        // console.log('start');
        await next();
    } catch (err) {
        logger.error('错误: %s', err.stack);
    }
};

module.exports = errorHandle;