const namen = [
  "John",
  "Bob",
  "Robert",
  "Chuck",
  "Pete",
  "Sammy",
  "Ana",
  "Sarah",
  "Franzi",
  "Oscar",
  "Henry",
  "Greg",
];

const namen2 = [
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

const wert = namen2.filter((item) =>  !namen.includes(item));

console.log("Gemeinsam", wert);
