/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: When in the global scope, this is bound to the window object.
* 2. Implicit: This is bound to the object that appears before the call time dot.
* 3. New: using a constructor function to instantiate an object binds this to the newly created object.
* 4. Explicit: passes the this value explicitly to the function via call, bind, or apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const exObj = {
    name: "Zach",
    introduce: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

exObj.introduce();

// Principle 3

// code example for New Binding

function Person(greeting, name) {
    this.greeting = greeting;
    this.name = name;
    this.greet = function() {
        console.log(`${this.greeting}, I'm ${this.name}`);
    }
}

const kramer = new Person("Howdy", "Kramer");
kramer.greet();

// Principle 4

// code example for Explicit Binding
const newman = new Person("Hello", "Newman")
kramer.greet.call(newman)