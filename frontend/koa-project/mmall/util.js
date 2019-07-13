function getDate(){
    var newTime = new Date().toLocaleString();     //把日期转换成2018/6/4 下午10:45:19 格式
    var arr = newTime.split(" ");             //把2018/6/4提取出来
    var arr2 = arr[0].split('-');             //把年月日数字单独提出来
    return arr2[0]+'年'+ arr2[1]+'月'+ arr2[2]+'日';      //拼接成我们需要的格式返回
}

module.exports = {getDate};