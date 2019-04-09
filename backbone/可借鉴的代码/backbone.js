// 总结：
// 1 Backbone是依赖Jquery、underscore库的，代码中可以看到很多Backbone通过代理的方式拿到这两个库中的方法，放在自己的原型对象或这Backbone对象上
// 2 MVC Module View  Controller 都extend 定义的Events对象的方法，基本的on off trigger等等

// 为一个方法的原型对象设置方法（代理），这些方法是underscore库中的方法
function Foo() {};
const slice = Array.prototype.slice;
const methodName = ['pick', 'emit', 'keys', 'values'];
methodName.forEach((val) => {
    if (!_[val]) return;
    Foo.prototype[val] = function() {
        const args = slice.call(arguments);
        args.unshift();
        return _[val].apply(_, args);
    }
});


Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
};

// keys() 的兼容处理
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
            keys.push(prop);
        }
    }
};

// 将对象挂载到制定的对象上
o = {
    a: 111,
    b: 222,
    c: 333,
    d: 444
};
_.pick(o, ['b', 'd']);
ret = {};
// 将制定的对象合并到this对象下
_.extend(this, _.pick(o, ['b', 'd']));


// this的隐式绑定
var obj = {
    on: function () {},
    once: function() {},
    say: function () {
        console.log(this.name);
    }
};
var Backbone = {
    name: 'backbone'
};
_.extend(Backbone, obj);
Backbone.say();
obj.say();

// underscore中result()的实现
// [Tip] 在for循环中，如果不满足条件就用length赋值给循环变量来结束循环
_.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
        return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
        var prop = obj == null ? void 0 : obj[path[i]];
        if (prop === void 0) {
            prop = fallback;
            i = length; // Ensure we don't continue iterating.【get这种处理方式了】
        }
        obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
};

var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    // 如果 protoProps 中有 constructor，就把它赋值给子类。若无，则执行父类的构造函数
    if (protoProps && _.has(protoProps, 'constructor')) {
        child = protoProps.constructor;
    } else {
        child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
};

// ============ 整体分析 =============
// backbone 中的整体结构
(function(root, factory) {
    root.Backbone = factory(root, {}, _, $);
}(this, function(root, Backbone, _, $) {
    Backbone.noConflict = function() {};

    // 事件：on once off trigger listenTo
    //      listenToOnce stopListening
    // （摘）可以和任意对象合体，将方法赋值到其他对象或原型上，合体后的对象可以自定义事件，提供如下方法自定义事件
    var Events = Backbone.Events = {
        on: function () {},
        once: function () {},
        off: function () {},
        trigger: function () {},
        listenTo: function () {},
        listenToOnce: function () {},
        stopListening: function () {},
    };
    _.extend(Backbone, Events);

    var Model = Backbone.Model = function () {
        // 各种方法的实现
    };
    // （给Model原型上添加Events对象中的方法）添加自定义事件模块
    _.extend(Model.prototype, Events, {
        // 各种方法的实现
    });
    // 给Model的原型对象上添加上一些underscore方法
    var modelMethod = ['keys', 'values', 'paris', 'invert', 'pick', 'omit', 'chain', 'isEmpty'];
    _.each(modelMethod, function(method) {
        Model.prototype[method] = _[method].call(_); // 执行时，this指向_
    });

    var Collection = Backbone.Collection = function() {};
    _.extend(Collection.prototype, Events, {});
    // 给Collection的原型对象上添加一些underscore的方法
    var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
        'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
        'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
        'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
        'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
        'lastIndexOf', 'isEmpty', 'chain', 'sample', 'partition'];
    _.each(methods, function(name) {
        Model.prototype[name] = _[name].call(_);
    });

    var View = Backbone.View = function() {};
    _.extend(View.prototype, Events, {});

    Backbone.sync = function() {
        return xhr;
    };

    Backbone.ajax = function() {};

    var Router = Backbone.Router = function () {};
    _.extend(Router.prototype, Events, {});

    var History = Backbone.History = function () {};
    _.extend(History.prototype, Events, {});

    var extend = function () {};

    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

    // 错误回调函数事件
    var wrapError = function () {};

    var urlError = function () {};
}));

