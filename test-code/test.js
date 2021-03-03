import React from 'react';
import ReactDOM from 'react-dom';


function Person(props)
{
  return(
    <div class="person">
        <h1>{props.name}</h1>
        <p>{props.age}</p>
    </div>
  );  
}

var app = (
  <div>
    <Person name="Karen de la Rosa" age="29" />
    <Person name="Juan dela Cruz" age="30" />
  </div>
);

ReactDOM.render(app,document.querySelector('#app'));


// scratches, code snippets, and notes

// let and const
let myName = 'Karen';
const consName = 'Rose'; // cannot be replaced

console.log('Manu');
myName = 'Manu';
console.log(myName);

// arrow function
function printMyNameReg(name){
  console.log(name);
}
printMyNameReg(myName);

const printMyNameConst = (name) => { //addresses issues with use of 'this' keyword
  console.log(name);
}
printMyNameConst(myName);
// if params count = 1, const printMyNameConst = name =>{} is acceptable 
// if no param, const printMyNameConst = () =>{} and referred as printMyNameConst()

const printMyInfo = (name,age) => { //addresses issues with use of 'this' keyword
  console.log(name,age);
}
printMyInfo(myName,29);

// if const function has return value
const add = (num1,num2) => num1+num2;
console.log(add(2,3));

const multiply = num => num*2;
console.log(multiply(2));

// Classes, Methods, Properties
class Human {
  // constructor() { //ES6
  //   this.gender = 'female';
  // }
  gender = 'female'; //ES7

  // printGender() { //ES6
  //   console.log(this.gender);
  // }  
  printGender = () => {
    console.log(this.gender);
  }

}

class Person extends Human{ // applies Inheritance (inherits properties and methods from Human)
  // constructor() { // property declaration for ES6
  //   super(); // required; executes the parent class
  //   this.name = 'Karen';
  //   this.gender = 'male'; // can modify parent class property
  // }
  name = 'Karen';
  gender = 'male';

  // printMyName(){ // method declaration for ES6
  //   console.log(this.name);
  // }
  printMyName = () => { //ES7
    console.log(this.name);
  }
}

const myPerson = new Person(); // constructor
myPerson.printMyName();
personalbar.printGender();

// Spread and Rest Operators

// Spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4]; // != [numbers,4] ( [[1,2,3],4] )
console.log(numbers); // [1,2,3]
console.log(newNumbers); //[1,2,3,4]

const person = {
  name:'Karen'
};
const newPerson = {
  ...person,
  age:29
};
console.log(person); 
console.log(newPerson); // [object Object] { age:29, name:'Karen' }

// Rest
const filterFxn = (...params) => {
  return params.filter(el => el === 1); //merges params values into array and applies array functions
}

console.log(filterFxn(1,2,3)); // [1]

// Destructuring

// Array Destructuring
const numbers = [1,2,3];
[num1,num3] = numbers;
console.log(num1,num3); // 1,3

// Object Destructuring
{name} = {name:'Karen', age:29}; //property name identifies w/c object property is taken
console.log(name) // Karen
console.log(age) // undefined

// Refreshing Array Functions
const numbers = [1,2,3];
const doubleNumArray = numbers.map(() => {
    return num * 2;
  });

  console.log(numbers); // [1,2,3]
  console.log(doubleNumArray); // [2,4,6]

