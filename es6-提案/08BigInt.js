0b1101n // 二进制
0o777n // 八进制
0xFFn // 十六进制

const a = 3n;
typeof a === 'bigint'; // true

const b = 2n;
console.log(a+b); // 5n