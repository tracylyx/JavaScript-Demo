Box.Application.addModule('nav', function(context) {	// context是模块的触碰点
	'use strict';

	//-------------------------
	// Private
	// ------------------------
	var i,		// 超过一个地方使用，就在这里定义，这样可以在多地使用
		moduleE1,
		listE1,
		boxE1,
		index;
	// var tableNav;

	//-------------------------
	// Public
	// ------------------------
	
	return {
		// init(),destroy()这两个方法和生命周期有关
		// 虽然不是必须使用，但是建议模块进行初始化和销毁
		init: function() {
			moduleE1 = context.getElement();	// 取回代表模块的元素
			listE1 = moduleE1.querySelectorAll('li');
			boxE1 = moduleE1.querySelectorAll('.table-cont');
		},
		destory: function() {
			moduleE1 = null;
			listE1 = null;
		},
		onclick: function(event, element, elementType) {
			var _this = this;
			for (i = 0; i < listE1.length; i++) {
				listE1[i].className = '';
				boxE1[i].className = '';
				var cur = element.index;
				console.log(cur);
			}
			element.className = 'active-btn';
			// for (i = 0; i < listE1.length; i++) {
			// 	listE1[i].index = i;
			// 	this.change();
			// }
		}
		// change: function() {
		// 	for (i = 0; i < listE1.length; i++) {
		// 		listE1[i].className = '';
		// 		boxE1[i].style.display = 'none';
		// 	}
		// 	this.element.className = 'active-btn';
		// 	// boxE1[this.index].style.display = 'none';
		// }
	}
});