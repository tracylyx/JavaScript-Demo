Backbone.js 为复杂WEB应用程序提供模型models、集合collections、视图views的结构。
模型-用于绑定键值数据和自定义事件
集合-富有可枚举的丰富API
视图-可以声明事件处理函数，并通过RESTful JSON接口连接到应用程序

数据结构：models、collections
用户接口：views、urls

它重度依赖underscore.js
history 支持依赖于Backbone.Router
DOM 处理依赖Backbone.View

当模型改变了，视图会自动更新
任何时候只要UI事件引起模型内的属性变化，模型会触发"change"事件

### 学习笔记
- 基本都在 ./可借鉴的代码/backbone.js文件中 
- 文件中 (?) 表示不明白

### Model
- 应用程序原始数据的精心抽象
- 包含了工具库、事件方法
- Model本身是一个构造函数，所以可以通过new的方式创建实例

### Collection
- 模型实例（M）的数据存在多个集合（C）中。例如，同一个模型，可能有不同的实例，

### View
- 控制类，用来处理模型的表现
- this.el 当前的DOM元素。el是从视图的tagName、className或者id等属性中创建的元素，没有这些值el就是空div

源码分析参考文档：
- https://segmentfault.com/a/1190000006697372#articleHeader4
- https://github.com/aircloud/backboneAnalyze/blob/master/src/backbone.js