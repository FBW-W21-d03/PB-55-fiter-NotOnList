const array1= [ "John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"];

const array2 =["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"]

const prüfenamen=array2.filter((alleNamen) => ! array1.includes(alleNamen));
console.log("Diese Namen sind nicht in der ersten Liste enthalten", prüfenamen);



