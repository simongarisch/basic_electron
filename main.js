"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back!';
console.log(message);
var x = 10;
var y = 3;
// three types: boolean, number, string
var isBeginner = true;
var total = 0;
var name = "Simon";
// accurate type checking and intellisense come with the use of typescript
//name = true;  // you'll see the red error with this
// so typescript assists us in not accidentally using the wrong types.
// it also assists with intellisense because we now know we are working with a string
var sentence = "My name is " + name;
console.log(sentence);
// we can declare nulls and undefined
// these are like var C#, variant (VB), void (c)
// and can be used to represent any type
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// declaring arrays (there are two syntax approaches, but the result is the same)
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// array of mixed type
// here we have a tuple
var person1 = ['Chris', 22];
console.log(person1); // [ 'Chris', 22 ]
// the enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); // 1 (index 1 in the enum)
// the any type -- we can assign different types
var randomValue = 10;
randomValue = true;
randomValue = 'Simon';
console.log(randomValue);
function someFunc(a, b) {
    return a + b;
}
console.log(someFunc(1, 3)); // 4
console.log(someFunc(2, 3)); // 5
// type inferrence
// declaring types is optional
var a;
a = 10;
a = true;
var b = 20;
//b = true;  // ts knows that this is a number
// ability to specify union types
var multitype;
multitype = 20;
multitype = true;
// moving to functions
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// add a ? to parameter that you want to be optional
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add2(1, 2)); // 3
console.log(add2(1)); // 1
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add3(2)); // 12
function fullName(personObj) {
    console.log(personObj.firstName + " " + personObj.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
// classes
// not that different from C# or Java
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('Vishwas');
employee1.greet();
// for inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating work");
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Bruce');
manager1.delegateWork();
manager1.greet();
// access modifiers: public, private, protected
// by default each class member is public
// public = free accessability
// private = accessibility from within the class
// protected = accessibility from the class and all subclasses
var MyClass = /** @class */ (function () {
    function MyClass(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return MyClass;
}());
var ChildMyClass = /** @class */ (function (_super) {
    __extends(ChildMyClass, _super);
    function ChildMyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildMyClass.prototype.doSomething = function () {
        //console.log(this.y)  // can't do this as y is private
        console.log(this.z);
    };
    return ChildMyClass;
}(MyClass));
var someObj = new ChildMyClass("str", true, 1.7);
someObj.doSomething();
