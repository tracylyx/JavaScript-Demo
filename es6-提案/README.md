### babel
- 如果不设置需要babel的类型，那么执行玩babel输出的内容和源文件是一样的
- .babelrc（babel run command）是一个全局配置文件，所有的babel操纵都会来读这个配置
- babel-node 会启动REPL环境，它是一个支持ES6的js执行环境

### 参考链接
- [babel官网](https://babel.docschina.org/docs/en/presets)
- [提案目前处在的各个阶段](https://github.com/tc39/proposals)
- [ES新特性的支持情况](https://kangax.github.io/compat-table/es6/)
- [babel stage个阶段介绍](https://www.vanadis.cn/2017/03/18/babel-stage-x/)
- [you dont no JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch5.md#statement-completion-values)
- [TODO只看了一半，编码方式](https://blog.csdn.net/hezh1994/article/details/78899683)



### ES6提案
- 什么提案。它由[tc39](https://github.com/tc39)这个组织在维护
- 一个特性最终被实现、广泛的使用。需要经过5个步骤：
stage 0（稻草人: 只是个想法可能会有相关的 Babel 插件）
stage 1（提议: 值得深入）
stage 2（草稿: 初始规范）
stage 3（候选: 完整的规范和初始浏览器实现）
stage 4（结束: 将被添加到下一个年度版本中）
- stage X presets 中的任何转换都是对未被批准发布为 Javascript 的部分（如 ES6 / ES2015）的更改
- 目前提案的进度情况可在这里[查询](https://github.com/tc39/proposals)
- 这些提案可能会有所变化，因此请谨慎使用，特别是对于第3阶段之前的提案

### PPT内容预览
- 9个新提案
- do表达式，大致的想法：让语句变成表达式，在不需要使用函数、retrun的方式返回值
	降低使用eval()的想法
- Statements are sentences 声明是一个语句
  expressions are phrases 表达式是一个短语
  operators are conjunctions/punctuation 操作是连接词货标点符号
- ?. 短路机制，一旦右侧判断是否为null 为true，就不会继续执行右侧表达式；右侧不允许是十进制数
- 在计算机种中，1 字节对应 8 位二进制数，而每位二进制数有 0、1 两种状态，因此 1 字节可以组合出 256 种状态
  美国人于是制定了一套编码（其实就是个字典），描述英语中的字符和这 8 位二进制数的对应关系，这被称为 ASCII 码。在美国用128个字符编码
  但在其他国家不够用，因此会拿最高位来使用。有于不同国家的字符集不同，因此会出现同一个码点表示的字符不同。
  一个码点（也就是 8 位二进制数）
  亚洲语言有更多的字符需要被存储，一个字节已经不够用了。于是，人们开始使用两个字节来存储字符。
  应该提出一种标准方案来展示世界上所有语言中的所有字符，出于这个目的，Unicode诞生了
   Unicode 给所有的字符指定了一个数字用来表示该字符
- JSON超集
- 函数的部分执行 partial application
	...只会被采集一次，如果函数的部分执行使用了多个...，那么每个...的值都将相同。
- 管道机制：
	把 前一个操作 的 值 传递给 后一个操作
	提高可读性(可以把嵌套的函数，写成从左到右的链式表达式。)

#### babel7的变化
- 使用@babel的命名空管理依赖包
- 任何年度的preset使用@babel/env取代
- 删除了Stage的preset，需要用户明确地直接使用单独的提案插件（低于Stage 4 的提案）。默认情况下，从@babel/polyfill中删除提案
- 对一些提案重命名由-proposal替换--transform
