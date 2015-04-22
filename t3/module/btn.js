Box.Application.addModule('btn', function(context) {
	'use strict';

	return {
		onclick: function(event, element, elementType) {
			if ( elementType === 'btn-input' ) {
				alert('hello world,just Take 3~~~');
			}
		}
	}
});