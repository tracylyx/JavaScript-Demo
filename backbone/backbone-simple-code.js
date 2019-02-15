(function(root, factory) {
	// Backbone模块化的一个接口
	// 支持 amd CommonJS window
}(this, function(root， Backbone, _, $) {
	Backbone.noConflict = function(){};
	Backbone.VERSION = '';
	const slice = Array.prototype.slice;
	Backbone.$ = $;
	Backbone.emulateHTTP = false;
	Backbone.emulateJSON = false;

	const Event = Backbone.Events = {
		on() {},
		once() {},
		off() {},
		trigger() {},
		listenTo() {},
		listenToOnce() {},
		stopListening() {}
	};
}));

// 基本格式
(function() {
	console.log('括号在最外层');
}())