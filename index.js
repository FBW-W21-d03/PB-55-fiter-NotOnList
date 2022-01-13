// TEIL-1
const names = ["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Sammy", "Sarah", "Francy", "Oscar", "Henry", "Greg"];


// TEIL-2
const names2 = ["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"];


// TEIL-3
 const checking = names2.filter((name) => !["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Sammy", "Sarah", "Francy", "Oscar", "Henry", "Greg"].includes(name));

console.log(checking);