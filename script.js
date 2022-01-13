// Wir möchten Namen in einem Array finden, die nicht auf der Liste eines anderen Arrays stehen.

// ## Aufgabenstellung - Teil 1
// Schreibe ein Array mit folgenden Namen: John, Bob, Robert, Chuck, Pete, Sammy, Ana, Sarah, Francy, Oscar, Henry, Greg.
const namens = ["John", "Bob", "Robert", "Chuck", "Pete", "Sammy", "Ana", "Sarah", "Francy", "Oscar", "Henry", "Greg"];


// ## Aufgabenstellung - Teil 2
// Schreibe nun ein zweites Array mit folgenden Namen: John, Bobby, Robert, Chuck, Peter, Sam, Ana, Sarah, Tithany, Oscar, Henry, Greg.
const namens2 = ["John", "Bobby", "Robert", "Chuck", "Peter", "Sam", "Ana", "Sarah", "Tithany", "Oscar", "Henry", "Greg"];

// ## Aufgabenstellung - Teil 3
// Wende nun filter auf das zweite Array an und prüfe, ob die Namen im ersten Array enthalten sind. Verwende dazu die includes() Methode.
let difference = namens.filter(x => !namens2.includes(x)).concat(namens2.filter(x => !namens.includes(x)));

console.log(difference);