Box.Application.addModule('btn', function(context) {
	'use strict';

	return {
		init: function() {},
		onclick: function(event, element, elementType) {
			if ( elementType === 'btn-input' ) {
				alert('right~~~~');
			}
		}
	}
});