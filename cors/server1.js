const http = require('http');
const express = require('express');

http.createServer((req, res) => {
	console.log('server1 listen on port 3000');
}).listen(3000);