const array1= [ "John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"];

const array2 =["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"]

const prüfenamen=array2.filter((alleNamen) => ! ["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"].includes(alleNamen));
console.log(prüfenamen);





/*const names = ['John', 'David', 'Mike','Sam','Carol','Bob'];
console.log("The names are=");
console.log(names);
var nameObject=names.filter((allNameObject) => !['David', 'Mike','Sam','Carol'].includes(allNameObject));
console.log("After filter=");
console.log(nameObject);*/