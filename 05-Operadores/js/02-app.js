const numero1=20;
const numero2="20";
const numero3=30;

//revisar si son iguales
console.log(numero1==numero3);

console.log(numero1==numero2);
//igual estricto
console.log(numero1===numero2);

console.log(typeof numero1);
console.log(typeof numero2);

//convirtiendo a entero el string
console.log(numero1===parseInt(numero2));


//diferente
const pass1='admin';
const pass2='Admin';

console.log(pass1!=pass2);
console.log(numero1!=numero2);//dara un falso negativo
//diferente estricto
console.log(numero1!==numero2);