// 观察者模式：希望接收通知的对象通过自定义事件订阅主题，通过发布者发布主题事件的方式被通知。
// subscriber deliver
let data = {
	name: 'zhangsna'
};
// 订阅者
let subscriber = [];
// 添加订阅者的方法  
const addSubscriber = function(fn) {
	subscriber.push(fn);
};
const deliver = function(name) {
	// 数据发生变化
	data.name = name;
	// 调用订阅者方法告知订阅者
	for(let i = 0; i < subscriber.length; i++) {
		const fn = subscriber[i];
		fn();
	}
};
addSubscriber(() => {
	console.log(data.name);
});
deliver('lisi');
deliver('Jane');

// 版本二
// 问题：改变一个状态需要定义很多方法，所以我们要把它封装起来
let state = {
	name: 'zhangsan'
};
let subscribers = [];
const subscribe = (fn) => {
	subscribers.push(fn);
};
const dispatch = (name) => {
	state.name = name;
	// 数据发生变化，调用（通知）所有方法（订阅者）
	subscribers.forEach(fn => fn());
};
subscribe(() => {
	console.log(state.name);
});
dispatch('lisi');
dispatch('Jane');


// 版本三
const createStore = (initState) => {
	let state = initState;
	let subscribers = [];
	const subscribe = (fn) => {
		subscribers.push(fn);
	};
	const dispatch = (currentState) => {
		state = currentState;
		subscribers.forEach(fn => fn());
	};
	const getState = () => {
		return state;
	};
	return {
		subscribe,
		dispatch,
		getState
	};
}
