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