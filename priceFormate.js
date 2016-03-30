/**
 * 处理价格千分位
 * @param  number 	price 价格
 * @return string   加了千分位的价格
 */
var priceFormate = function (price) {
    var priceStr = price + '', // '1000'
        priceInt = priceStr, // 整数部分
        priceFloat = '', // 小数部分
        hasDot = /\./g.test(priceStr); // 是否有小数部分

    if (hasDot) {
        var temp = priceStr.split('.');
        priceInt = temp[0];
        priceFloat = temp[1];
    }

    var priceArr = priceInt.split('').reverse(); // [0, 0, 0, 1]

    var resultArr = [];

    for (var i = 0; i < priceArr.length; i++) {
        resultArr.push(priceArr[i]);
        (i + 1) % 3 == 0 && (i + 1) !== priceArr.length ? resultArr.push(',') : '';
    }

    var result = resultArr.reverse().join('');

    if (priceFloat.length !== 0) { // 组装小数部分
        result += '.';
        result += priceFloat;
    }

    return result;
};