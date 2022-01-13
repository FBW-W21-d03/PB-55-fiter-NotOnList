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
const liste2 = [
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
      "Greg",
    ].includes(allNameObject)
);

//console.log(allNameObject);
console.log(nameObject);
console.log("nach filter ", `${nameObject}`);

//// zweite lösung///

const pesonen1 = [
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
const pesonen2 = [
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
  "Greg",
];
const mainListe = pesonen2.filter((elem) => !pesonen1.includes(elem));
console.log("nach dem Filter ", `${mainListe}`);
