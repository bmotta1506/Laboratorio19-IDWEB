const contraseñaFuerte= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(contraseñaFuerte.test("Brayan123")); 
console.log(contraseñaFuerte.test("brayan123"));
console.log(contraseñaFuerte.test("Brayan"));

