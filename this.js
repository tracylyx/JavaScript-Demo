var Jump = {
    jump2: function() {
        console.log(2);
    },
    jump3: function() {
        this.jump2(); // 当前函数的作用域为Jump对象
        console.log(3);
    },
};
Jump.jump3();

var Jump = {
    jump1: () => console.log(1),
    jump2: () => console.log(2),
    jump3: () => {
        Jump.jump2(); // 作用域为window对象（因为此处是用箭头函数进行定义的）
        console.log(3);
    },
};
Jump.jump3();