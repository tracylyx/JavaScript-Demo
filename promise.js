// 一个简单的Promise使用方式
// 创建一个Promise实例，传入一个函数参数，这个函数参数在new的时候就会执行
const promise = new Promise((resolve, reject) => {
	if (// 异步操作成功) {
		resolve(value);
	} else {
		reject(error);
	}
});
// 实例可以调用then方法，then接受两个函数参数，第二个函数参数可选
promise.then((value) => {
	// 异步成功的回调函数
}, (err) => {
	// 异步失败的回调函数
});

// 用Promise对象实现一个Ajax操作的例子
// getJSON 对XMLHttpReuqest对象进行了一个封装
const getJSON = function(url) {
	const promise = new Promise(function(resolve, reject) {
		const handler = function() {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};

		const xhr = new XMLHttpReuqest();
		xhr.open('GET', url);
		xhr.onreadystatechange = handler;
		xhr.responseType = 'json';
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
	});

	return promise;
};
getJSON('/posts.json').then(function(res) {
	console.log(res);
}, function(err) {
	console.error(err);
});

// 【补充】setTimeout支持第三个、第四个参数...，它们会作为回调函数的参数进行传递
setTimeout((x, y)=> {
	console.log(x+y);
}, 1000, 100, 200);

// Promise.resolve
setTimeout(() => {
	console.log(1);
}, 0);
Promise.resolve().then(() => {
	console.log(2);
});
console.log(3);