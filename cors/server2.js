const http = require('http');
const express = require('express');

const app = express();

const whiteList = ['http://localhost:3000'];
app.use((req, res, next) => {
	const origin = req.headers.origin;
	if (whiteList.includes(origin)) {
		// 设置哪个源可以访问我
		res.setHeader('Access-Control-Allow-Origin', origin);
		// 允许携带哪个头访问我
		res.setHeader('Access-Control-Allow-Headers', 'name');
		// 允许哪个方法访问我
		res.setHeader('Access-Control-Allow-Methods', 'PUT');
		// 允许携带cookie
		res.setHeader('Access-Control-Allow-Credentials', true);
		// 预检的存活时间
		res.setHeader('Access-Control-Max-Age', 6);
		// 允许返回的头
		res.setHeader('Access-Control-Expose-Headers', 'name');
		if (req.method === 'OPTIONS') {
			res.end();
		}
	}
	next();
});
app.put('/getData', (req, res) => {
	console.log(req.headers);
	res.setHeader('name', 'yxli');
	res.end('the real name');
});
app.get('getData', (req, res) => {
	console.log(req.headers);
	res.end('the real name');
});
app.use(express.static(__dirname));

app.listen(4000);