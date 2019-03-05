### babel
- 如果不设置需要babel的类型，那么执行玩babel输出的内容和源文件是一样的
- .babelrc（babel run command）是一个全局配置文件，所有的babel操纵都会来读这个配置
- babel-node 会启动REPL环境，它是一个支持ES6的js执行环境

### 参考链接
- [babel官网](https://babel.docschina.org/docs/en/presets)
- [提案目前处在的各个阶段](https://github.com/tc39/proposals)
- [you don`t no JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch5.md#statement-completion-values)

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
