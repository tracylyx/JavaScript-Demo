// 代码来源：https://juejin.im/post/5c72a1766fb9a049ea3993e6?utm_source=gold_browser_extension#heading-1
// 1
var A = function() {}; 
A.prototype.n = 1; 
var b = new A(); 
A.prototype = { n: 2, m: 3 }
var c = new A(); 
console.log(b.n); 
console.log(b.m);
console.log(c.n); 
console.log(c.m);

// 2
var F = function() {};

Object.prototype.a = function() {
  console.log('a');
};

Function.prototype.b = function() {
  console.log('b');
}

var f = new F();

f.a();
f.b();

F.a();
F.b();


// 3
function Person(name) {
    this.name = name
}
let p = new Person('Tom');
问题1：1. p.__proto__等于什么？
问题2：Person.__proto__等于什么

// 4
var foo = {},
    F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);