const name1=["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"]
const name2=["John", "Bobby", "Sam","Robert", "Chuck", "Peter", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"]
const namen = name2.filter((word) => name1.includes(word));
console.log(namen)
