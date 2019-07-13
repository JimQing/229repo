const compose = require('koa-compose');
const errorHandle = require('./errorHandle');
const reportHandle = require('./report');

module.exports = compose([errorHandle, reportHandle]);