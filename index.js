/* 
! The Netsh utility can use script files to automate configuration tasks.*/
"use strict";
/* 
! Array constante mit Namen */
const namen = [
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
/*
! Mit const deklarierte Variablen sind in der gesamten Funktion verfügbar, in der sie deklariert wurde */
const namen1 = [
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
/*
! Die Methode filter durchläuft alle Elemente des Arrays auf dem sie aufgerufen wurde und erzeugt ein neues Array mit denjenigen Elementen des ursprünglichen Arrays, für welche die als Argument an filter übergebene Callbackfunktion den Wert true zurückgibt.*/
const alleNamen = namen1.filter(
  (name1) =>
    ![
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
    ].includes(namen1)
);
/*
! Gibt eine Nachricht auf der Web-Konsole aus.*/
console.log("Welche Namen??", namen1);
