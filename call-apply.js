// call & apply 的使用场景
// call(this, args1[, arg2, arg3, ...])
// apply(this, [arr])

// 求数组最大、最小值
const arr = [22,1,4,100,54];
Math.max.call(null, ...arr); // 100
Math.min.call(null, ...arr); // 100
Math.max.apply(null, arr); // 1
Math.min.apply(null, arr); // 1

// 判断变量类型。比较靠谱的一种判断方式
const obj = {};
const fn = () => {};
Object.prototype.toString.call(obj) === '[object Object]';
Object.prototype.toString.call(arr) === '[object Array]';
Object.prototype.toString.call(fn) === '[object Function]';

// 将 类数组转 为 数组
const htmlDOM = document.getElementsByTagName('html'); // 类数组
// slice 切割数组，并将切割的结果返回。参数为[a, b）
Array.prototype.slice.call(htmlDOM); // 返回数组
