Box.Application.addModule('nav', function(context) {
	'use strict';

	//-------------------------
	// Private
	// ------------------------
	
	// var tableNav;

	//-------------------------
	// Public
	// ------------------------
	
	return {
		init: function() {
		},
		onclick: function(event, element, elementType) {
			if (elementType === "nav-li") {
				if (element.class === 'active-btn') {
					alert('active');
				}	
			}
			// console.log(element.length);
		}
	}
});