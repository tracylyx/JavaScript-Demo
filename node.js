const path = require('path');

process.env.NODE_ENV = 'prd';
console.log(process.env.NODE_ENV);

// __dirname 即 directory name
console.log(__dirname);
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname), '/testSrc');