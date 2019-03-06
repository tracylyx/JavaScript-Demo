function add(x, y) {
	return x + y;
}
function add2(x) {
	return x + 2;
}

add2 = add.bind(null, 2);

// partial application
add2 = add(?, 2);
add2 = add(2, ?);
