const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;
const logdir = 'D:/koa-log/';
const {getDate} = require('../util.js');

// 对logger进行基础配置
const loggerConfig = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        verbose: 3,
        debug: 4,
        silly: 5
    },
    color: {
        error: 'red',
        debug: 'blue',
        warn: 'yellow',
        data: 'grey',
        log: 'green',
        verbose: 'cyan',
        silly: 'magenta'
    },
    // 自定义输出的格式
    // 参数 info 指的是在 createLogger 函数的 变量中的 format 变量下的 combine所包含的变量
    // 如: info.label 事实上拿到的是下方的 labelName
    logFormat: printf(info=> {
        return `[${getDate()}] [${info.label}] [${info.level}] - ${info.message}`;
    }),
    // 日志文件绝对路径
    logFileName: logdir + '/' + getDate() + '.log' 
};

const logger = function(labelName) {
    const _labelName = labelName && /^[\S]+$/.test(labelName) ? labelName : '默认';

    return createLogger({
        levels: loggerConfig.levels,
        format: combine(
            label({label: _labelName}),
            // 时间戳
            timestamp(),
            // 设置颜色
            format.colorize({all: true}),
            // 开启插值功能 
            format.splat(), 
            // 输出格式的配置
            loggerConfig.logFormat
        ),
        // 日志的相关配置
        transports: [
            // 控制台输出日志
            new transports.Console(), 
            // 绑定日志文件
            new transports.File({
                level: 'error',
                filename: loggerConfig.logFileName,
                colorize: false
            })
        ]}
    );
};

module.exports = logger; // 暴露logger对象