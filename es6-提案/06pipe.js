x |> f;
// 等同于
f(x);

// 提高可读性
const double = (n) => n*2;
const increment = (n) => n+1;

// 传统写法
double(increment(double(double(5))));
// 管道操作符写法
5 |> double |> double |> increment |> double;