const URLSegura = /^https:\/\/[^\s/$.?#].[^\s]*$/i;

console.log(URLSegura.test("https://www.ejemplo.com")); 
console.log(URLSegura.test("http://www.ejemplo.com")); 
console.log(URLSegura.test("www.ejemplo.com"));