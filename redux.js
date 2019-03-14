// 代码来源文章：https://juejin.im/post/5c77df326fb9a049f06af36f
const createStore = (initState) => {
	let state = initState;
	let subscribers = [];
	const subscribe = (fn) => {
		subscribers.push(fn);
	};
	const dispatch = (currentState) => {
		state = currentState;
		subscribers.forEach(fn => fn())
	};
	const getState = () => {
		return state;
	};
	return {
		subscribe,
		dispatch,
		getState
	};
};
let store = createStore({
	name: 'tracy'
});
store.subscribe(() => {
	const state = store.getState();
	console.log(state.name);
});
store.dispatch({
	name: 'Jane'
});

const createStore = (reducer, initState) => {
	let state = initState;
	let subscribers = [];
	const subscribe = (fn) => {
		subscribers.push(fn);
	};
	const dispatch = (action) => { // 提供一个改变状态的命令
		state = reducer(state, action); // reducer 返回一个新的state。
		subscribers.forEach(fn => fn())
	};
	const getState = () => {
		return state;
	};
	return {
		subscribe,
		dispatch,
		getState
	};
};
// 管理者帮忙更改状态
function reducer(state, action) {
	let ret = {...state};
	// 即使action指令给错，也不会影响state出现不可描述的问题
	switch(action.type) {
		case 'add':
			ret = {
				...state,
				num: state.num + 1
			};
			break;
		case 'minus':
			ret = {
				...state,
				num: state.num - 1
			};
			break;
		default:
			ret;
	}
	return ret;
}
let initState = {
	num: 0
};
const store = createStore(reducer, initState);
store.subscribe(() => {
	let state = store.getState();
	console.log(state.num);
});
store.dispatch({type: 'add'});
