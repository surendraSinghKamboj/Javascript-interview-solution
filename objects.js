console.clear();
// method 1 Object constructor:
const object = new Object();
console.table(object);
// method 2 Object’s create method:
const obj = Object.create(null);
console.table(obj);
// method 3 Object literal syntax:
const objLitral = { name: "Surendra" }
console.table(objLitral);
// method 4 Function constructor:
function Person(name) { 
    console.log("Welcome "+name);
    this.name = name; 
}
let objPerson = new Person("Irfan");
console.table(objPerson);
// method 5 ES6 Class Constructor 
class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
let rahul = new Student("Rahul", 26);
console.table(rahul);

// method 6 Singleton pattern
let emp = new (function Person(name) { 
    console.log("Welcome "+name);
    this.name = name; 
})("Sunnu");

console.table(emp);
