const firstNames= ["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"];

const secondNames= ["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"];

const checkNames = secondNames.filter((check)=> firstNames.includes(check));
const exception = secondNames.filter((check)=> !firstNames.includes(check));

console.log("The same names in both Arrays:",checkNames);
console.log("Only in second Array:",exception);
