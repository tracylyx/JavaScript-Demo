// 参考文章：
// https://zhuanlan.zhihu.com/p/24594294
// AJAX 即 Asynchronous JavaScript and XML，异步的 JavaScript 和 XML
// 作用：使用 AJAX 可以无刷新地向服务端发送请求接收服务端响应，并更新页面。
// JS实现AJAX主要是基于浏览器提供的XMLHTTPRequest（XHR）类
// ====== xhr ======
var xhr;
if (window.XMLHtrpRequest) {
	xhr = new XMLHtrpRequest();
} else if(window.ActiveXObject) { // IE
	try{
		xhr = new ActiveXObject('Msxml2.XMLHTTP');
	} catch(e) {
		try{
			xhr = new ActiveXObject('Micrsoft.XMLHTTP');
		} catch(e) {
			console.log(e.message);
		}
	}
}
if (xhr) {
	xhr.onreadystatecange = onReadyStateChangeHandler;
	xhr.open('POST', '/api', true);
	xhr.send('username=admin&password=root');
	// GET 方式
	xhr.open('GET', '/api?username=admin&password=root', true); // true 表示为异步，js继续执行，不会等待服务器响应。这就是 AJAX 中的 A
	xhr.send(null);
}
function onReadyStateChangeHandler() {
	var readyState = xhr.readyState;
	var status = xhr.status;
	console.log(readyState);
	if (readyState === 4) {
		if (status === 200) {
			console.log(xhr.responseText);
		} else {
			console.log('there was a problem with the request.');
		}
	} else {
		console.log('still not ready...');
	}
}

// ====== JQuery AJAX ======
$.ajax({
	method: 'POST',
	url: '/api',
	data: {
		username: 'admin',
		password: 'root'
	}
})
	.done(function(msg) {
		alert('Data Saved: ' + msg);
	})

// ====== fetch ======
fetch('/api').then(function(response) {
	return response.json();
}).then(function(data) {
	console.log(data);
}).catch(function(err) {
	console.log(`Oops, error: ${err}`);
});

// ES6 写法
fetch('/api')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.log(`Oops, error: ${err}`));

// async await写法
// 可以像些同步代码一样写异步
async function() {
	try {
		let response = await fetch(url);
		let data = response.json();
		console.log(data);
	} catch(err) {
		console.log(`Oops, error: ${err}`);
	}
}