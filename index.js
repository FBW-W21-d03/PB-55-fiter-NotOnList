"use strict";

const namen = [
  "John",
  "Bob",
  "Robert",
  "Chuck",
  "Pete",
  "Sammy",
  "Ana",
  "Sarah",
  "Francy",
  "Oscar",
  "Henry",
  "Greg",
];

const namen1 = [
  "John",
  "Bobby",
  "Robert",
  "Chuck",
  "Peter",
  "Sam",
  "Ana",
  "Sarah",
  "Tithany",
  "Oscar",
  "Henry",
  "Greg",
];

const alleNamen = namen1.filter(
  (name1) =>
    ![
      "John",
      "Bob",
      "Robert",
      "Chuck",
      "Pete",
      "Sammy",
      "Ana",
      "Sarah",
      "Francy",
      "Oscar",
      "Henry",
      "Greg",
    ].includes(namen1)
);
console.log("Welche Namen??", alleNamen);
