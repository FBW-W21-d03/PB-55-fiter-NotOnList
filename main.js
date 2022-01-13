let liste1 = [
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

let nameObject = liste1.filter(
  (allNameObject) =>
    ![
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
      "Gre",
    ].includes(allNameObject)
);

//console.log(allNameObject);
console.log(nameObject);
console.log("nach filter ",`${nameObject}`)
