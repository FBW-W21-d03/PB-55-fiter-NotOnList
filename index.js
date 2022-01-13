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
  "Greg"
];

const namen1 =  [
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
  "Greg"
];

const checkNames = namen1.filter((names) => !namen.includes(names));
console.log(checkNames);