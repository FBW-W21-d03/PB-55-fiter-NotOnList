// Teil 1
const namen1 = ["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"];

// Teil 2
const namen2 = ["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"];

// Teil 3

const matches = namen2.filter((namen) => namen1.includes(namen));
console.log("Existierenden namen: ", matches);
