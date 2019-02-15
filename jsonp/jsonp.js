// babel-node app.js #启动服务
// 访问index.html页面
function jsonp(params) {
	const scriptDOM = document.createElement('script');
	scriptDOM.src = `${params.url}?callback=${params.fnName}`;
	document.getElementsByTagName('head')[0].appendChild(scriptDOM);
}
function hello(data) {
	console.log('%c response data ====>', 'color: pink');
	console.log(data);
}
jsonp({
	url: 'http://localhost:5000/',
	fnName: hello.name,
	fn: hello
});
