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




// modules
import {name, age, birthYear} from 'person';
console,log(name, age, birthYear);




//destructuring
var {user, clan} = {user: 'devon', clan: 'gangrel'};
console.log(user, clan); // devon gangrel




//default + rest + spread
function logEach(...stuff) {
    stuff.forEach(function (string) {
        console.log(string);
    });
}
logEach("hello", "world", "how's it hanging?");

function logSpread(num1, num2, num3){
	return num1 * num2 - num3;
}
var nums = [7, 8];
console.log(logSpread(...nums, 9));




//classes
class Pemdas {
	constructor(num1, num2, num3) {
		this.num1 = num1;
		this.num2 = num2;
		this.num3 = num3;
	}
	get answer() {
		return this.calc();
	}
	calc(){
		return ((this.num1 * this.num1 * this.num1) / this.num2)*(this.num3 - this.num2 + this.num1);
	}
}
const numbers = new Pemdas(6, 8, 15);
console.log(numbers.answer);




//Object rest and spread properties
// i get this, but couldn't produce anything fancy...
let { a, b, ...d } = { a: 2, b: 4, c: 6, d: 8 };
console.log(a - b * (d.c) / (d.d)); // -1


let { e, f, ...h } = { e: "Kayla", f: "Kate", g: "Bonnie", h: "Kate" };
let newObject = { e, f, ...h };
console.log(newObject); /*{
						   Object {
  						   "e": "Kayla",
  						   "f": "Kate",
  					       "g": "Bonnie",
  						   "h": "Kate"
 								      }	*/
