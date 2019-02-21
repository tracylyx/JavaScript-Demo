// 函数作用域在函数执行完毕后立即被销毁
function test() {
	var i= 1;
	console.log(i);
}
test();
console.log(i);

// 模拟块级作用域
// 原理：函数作用域在函数执行完毕后立即被销毁
function mockBlockScope() {
	(function() {
		var mockI = '只在块级作用域中展示';
		console.log(mockI); // 只在块级作用域中展示
	})();
	console.log(mockI); // Uncaught ReferenceError: mockI is not defined
}
mockBlockScope();