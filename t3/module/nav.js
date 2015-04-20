Box.Application.addModule('nav', function(context) {
	'use strict';

	//-------------------------
	// Private
	// ------------------------
	var i,
		moduleE1,
		listE1,
		boxE1;
	// var tableNav;

	//-------------------------
	// Public
	// ------------------------
	
	return {
		init: function() {
			moduleE1 = context.getElement();
			listE1 = moduleE1.querySelectorAll('li');
			boxE1 = moduleE1.querySelectorAll('.table-cont');
		},
		destory: function() {
			moduleE1 = null;
			listE1 = null;
		},
		onclick: function(event, element, elementType) {
			// vat current = this;
			var _this = this;
			for (i = 0; i < listE1.length; i++) {
				listE1[i].className = '';
				boxE1[i].className = '';
				var cur = element.index;
				console.log(cur);
			}
			element.className = 'active-btn';
		}
	}
});