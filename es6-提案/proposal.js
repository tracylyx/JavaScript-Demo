const f = () => {
	return 2;
}

// {
// 	let t = f();
// 	t * t +1;
// }

// console.log(t);

const doExpress = do{
	let t = f();
	t = t * t +1;
}

console.log(t);