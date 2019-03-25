function Test() {
    var name = '';
    function Person(val) {
        name = val;
    }
    Person.prototype.getName = () => {
        return name;
    }
    Person.prototype.setName = (val) => {
        name = val;
    }
    return Person;
};
var Person = Test();
var p = new Person('tracy');
p.getName(); // tracy
p.setName('hello tracy');
p.getName(); // hello tracy