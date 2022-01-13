const arrayNams = [ "John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"
];

const arrayNams2 = ["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"
];

const namen = arrayNams2.filter (( word) =>! arrayNams.includes( word));
console.log(namen);