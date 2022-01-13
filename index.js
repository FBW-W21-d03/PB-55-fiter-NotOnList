'use strict';
// javaScript-fiter-NotOnList
// Aufgabenstellung - Teil 1
const array = ['John', 'Bob', 'Robert', 'Chuck', 'Pete', 'Sammy', 'Ana', 'Sarah', 'Francy', 'Oscar', 'Henry', 'Greg']
// Aufgabenstellung - Teil 2
const arrayTwo = ['John', 'Bobby', 'Robert', 'Chuck', 'Peter', 'Sam', 'Ana', 'Sarah', 'Tithany', 'Oscar', 'Henry', 'Greg']
// Aufgabenstellung - Teil 3
const result = arrayTwo.filter(checkArray);

function checkArray(name) {
  return !array.includes(name);
}
console.log(result);

const result2 = arrayTwo.filter((name) => !array.includes(name));

console.log("Folgende namen sind im 1.Array nicht enthalten:" , result2);