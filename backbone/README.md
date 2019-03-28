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

源码分析参考文档：
- https://segmentfault.com/a/1190000006697372#articleHeader4
- https://github.com/aircloud/backboneAnalyze/blob/master/src/backbone.js
- [叶小钗](https://www.cnblogs.com/yexiaochai/tag/Backbone/)