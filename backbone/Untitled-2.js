Person = function (name) {
    this.name = name;
    this.say = () => {};
}
Person.prototype.work = () => console.log('work');
// 给原型链上扩展添加属性（共享）
_.extend(Person.prototype, {
    work: () => console.log('work'),
    life: () => console.log('life')
});
// 给构造函数添加属性（不共享）
_.extend(Person, {
    saySpceial: function() {
        console.log('special');
    }
})

var Extend = () => {};
Person.Extend = Extend; // Extend 挂在函数对象上的，在实例上是取不到的

var Jump = {
    jump1: () => console.log(1),
    jump2: function() {
        console.log(2);
    },
    jump3: function() {
        this.jump2();
        console.log(3);
    },
};
Jump.jump3();