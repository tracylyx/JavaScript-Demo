// 函数式编程1: 一个返回 函数 的 函数
function splat(fn) {
	return function(arr) {
		return fn.apply(null, arr); // apply 是js实现函数式编程的方式之一
	}
}

var splatTest = splat(function(x, y) {
	console.log(x+y);
});

splatTest([1,2]);

// 需要运行在含有underscore.js的环境下
function unsplat(fn) {
	return function() {
		return fn.call(null, _.toArray(arguments));
	}
}

var unsplatTest = unsplat(function(arr) {
	console.log(arr.join(' '));
});

unsplatTest('hello', 'world', '!');

// 你不可能用 arguments.slice() 这样的形式调用，因为 arguments 本身还是一个非数组对象，只是像数组。
// 这个时候你想到了 .call 方法，这个方法让你可以 **自定义调用** 函数的内部 this 指向哪里（通过call／apply改变this的指向）
// 之前说过，默认是指向调用这个函数的对象。