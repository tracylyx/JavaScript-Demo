// 函数作用域在函数执行完毕后立即被销毁
function test() {
	var i= 1;
	console.log(i);
}
test();
console.log(i);

// 模拟块级作用域
// 原理：函数作用域在函数执行完毕后立即被销毁
// 作用：为了防止命名冲突起作用，我们应该尽量避免使用全局变量和全局函数，这时候我们可以模拟块级作用域
function mockBlockScope() {
	(function() {
		var mockI = '只在块级作用域中展示';
		console.log(mockI); // 只在块级作用域中展示
	})();Z
	console.log(mockI); // Uncaught ReferenceError: mockI is not defined
}
mockBlockScope();

var a = [];
for (let i = 0; i < 10; i++) {
debugger;
      a[i] = function () {console.log(i);};
}
a[0]();                // 0
a[1]();                // 1
a[6]();                // 6