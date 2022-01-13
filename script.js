const array1= [ "John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg", ];

const array2 =["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg",];

const prüfenamen=array2.filter((alleNamen) => ! ["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Sham","Francy", "Oscar", "Henry", "Greg"].




includes(alleNamen));




console.log("Diese Namen sind nicht in der ersten Liste enthalten", prüfenamen);


const name1=["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"]
const name2=["John", "Bobby", "Sam","Robert", "Chuck", "Peter", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"]
const namen = name2.filter((word) => name1.includes(word));
console.log(namen)