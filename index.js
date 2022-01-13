// 1 )
const namen = ['John','Bob', 'Robert', 'Chuck', 'Pete', 'Sammy', 'Ana', 'Sarah', 'Francy', 'Oscar', 'Henry', 'Greg'];
// 2 )
const namen2= ['John', 'Bobby', 'Robert', 'Chuck', 'Peter', 'Sam', 'Ana', 'Sarah', 'Tithany', 'Oscar', 'Henry', 'Greg'];
// 3 )
const prüfName =namen2.filter((check) => namen.includes(check));
console.log(prüfName);