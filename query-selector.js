function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

function dom(selector) {
	if (!selector) {
		throw Error('without selector.');
	}
	// 通过slice将类数组转为数组
	// return Array.prototype.slice.call(document.querySelector(selector));
	return document.querySelector(selector);
}