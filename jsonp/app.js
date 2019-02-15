const http = require('http');
const urlModule = require('url');
const reqData = {
	hello: 'hello',
	world: 'world',
	last: '!'
};
http.createServer((req, res) => {
	const params = urlModule.parse(req.url, true);
	if (params.query && params.query.callback) {
		const str = `${params.query.callback}(${JSON.stringify(reqData)})`;
		console.log(str);
		res.end(str);
	} else {
		res.end();
	}
}).listen(5000);