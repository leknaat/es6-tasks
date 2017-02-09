// let and const
const person = {
	name: 'Kayla',
	age: 29
};
console.log(person);

const thing = "a string";
let a = 1;
let b = 2;
// this will throw an error for trying to redefine: thing = "another string"; 
console.log(thing);
console.log(a * b);




// arrows
let arrowExample = (a, b, c) =>
	(a + b)*c;
console.log(arrowExample(3,6,9));




//template strings
let multiline = `This is okay
				 to do now.`
let stringInt = `${person.name} is ${person.age}`;

console.log(multiline);
console.log(stringInt);




//modules
import {name, age, birthYear} from 'person';
console.log( name, age, birthYear);