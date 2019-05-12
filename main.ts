export {}

let message = 'Welcome back!';
console.log(message);

let x = 10;
const y = 3;

// three types: boolean, number, string
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Simon";

// accurate type checking and intellisense come with the use of typescript
//name = true;  // you'll see the red error with this
// so typescript assists us in not accidentally using the wrong types.
// it also assists with intellisense because we now know we are working with a string
let sentence: string = `My name is ${name}`;
console.log(sentence);


// we can declare nulls and undefined
// these are like var C#, variant (VB), void (c)
// and can be used to represent any type
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// declaring arrays (there are two syntax approaches, but the result is the same)
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// array of mixed type
// here we have a tuple
let person1: [string, number] = ['Chris', 22];
console.log(person1);  // [ 'Chris', 22 ]

// the enum type
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);  // 1 (index 1 in the enum)

// the any type -- we can assign different types
let randomValue: any = 10;
randomValue = true;
randomValue = 'Simon';
console.log(randomValue);

function someFunc(a: number, b:number){
    return a + b;
}
console.log(someFunc(1, 3));  // 4
console.log(someFunc(2, 3));  // 5


// type inferrence
// declaring types is optional
let a;
a = 10;
a = true;

let b = 20;
//b = true;  // ts knows that this is a number

// ability to specify union types
let multitype: number | boolean;
multitype = 20;
multitype = true;

// moving to functions
function add(num1: number, num2: number): number{
    return num1 + num2;
}
add(2, 2);

// add a ? to parameter that you want to be optional
function add2(num1: number, num2?: number): number{
    if(num2)
      return num1 + num2;
    else
      return num1;
}
console.log(add2(1, 2));  // 3
console.log(add2(1));     // 1


function add3(num1: number, num2: number = 10): number{
    if(num2)
      return num1 + num2;
    else
      return num1;
}
console.log(add3(2));  // 12

// inerfaces
interface Person {
    firstName: string;
    lastName: string;
    blahBlah?: string;  // this is an optional property for person objects
}

function fullName(personObj: Person){
    console.log(`${personObj.firstName} ${personObj.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);

// classes
// not that different from C# or Java
class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let employee1 = new Employee('Vishwas');
employee1.greet();


// for inheritance
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating work`);
    }
}

let manager1 = new Manager('Bruce');
manager1.delegateWork();
manager1.greet();


// access modifiers: public, private, protected
// by default each class member is public
// public = free accessability
// private = accessibility from within the class
// protected = accessibility from the class and all subclasses
class MyClass {
    public x: string;    // the public is default, so somewhat redundant
    private y: boolean;  // securing this class property (sub classes cannot access this)
    protected z: number; // subclasses can access protected members, but not private ones
 
    constructor(x: string, y:boolean, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

}

class ChildMyClass extends MyClass {

    doSomething(){
        //console.log(this.y)  // can't do this as y is private
        console.log(this.z);
    }
}


let someObj = new ChildMyClass("str", true, 1.7);
someObj.doSomething();