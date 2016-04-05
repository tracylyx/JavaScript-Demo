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

/**
 * @description 浅拷贝
 * @param  object obj [对象]
 * @return object     [复制出来的对象]
 * @node 浅拷贝对于obj = {a: {b: 10}}这类对象是无法起到真正的拷贝作用。
 *       对于obj = {a: 10}这类，可以正常处理
 *       underscore中的_.each() 是浅拷贝
 *             zepto中的.each() 是浅拷贝
 * @example 
 *         var obj1 = {a: 10};
 *         var obj2 = lightCopy(obj1);
 *         obj2.a = 20;
 *         console.log(obj1.a); // 10
 * 
 *         var obj1 = {a: {b: 10}};
 *         var obj2 = lightCopy(obj1);
 *         obj2.a.b = 30;
 *         console.log(obj1.a.b); // 30 由于是浅拷贝、这时候被改变了。
 */
var lightCopy = function (obj) {
    var newObj = {};

    for (var attr in obj) {
        newObj[attr] = obj[attr];
    }

    return newObj;
};

/**
 * @description 深拷贝，使用递归的方式进行深拷贝
 * @param  object obj [对象]
 * @return object     [复制出来的对象，完全引用两个地址]
 * @example 
 *         var obj1 = {a: {b: 10}};
 *         var obj2 = deepCopy(obj1);
 *         obj2.a.b = 30;
 *         console.log(obj1.a.b); // 10
 */
var deepCopy = function (obj) {
    if (typeof obj != 'object') { // 递归种植条件
        return obj;
    }

    var newObj = {};

    for (var attr in obj) {
        newObj[attr] = deepCopy(obj[attr]); // 通过递归进行深度拷贝
    }

    return newObj;
};