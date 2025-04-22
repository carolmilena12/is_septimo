// callbacks funcion que recibe como parametro otr funcion

function saludar(nombre, callback){

    console.log(`Hola como estas ${nombre} ?`);
    callback();
}
saludar("Ramoncito",()=>console.log("Hola esta todo bien"))



saludar("Aguirre",()=>console.log("hola todo bien"))

saludar("Pilar", function (){
    console.log("hola, todo bien");
})

function procesarDato(number, callback){
    console.log("dato sin procesar" , number);
    callback(number);
}

procesarDato(3, (number)=>{
    console.log("el multiplo es :")
    console.log(number*5);
});

function calculadora(a, b, callback){
    return callback(a,b);
}
suma = (a,b)=>a+b;
restar = (a,b)=>a-b;
resultado =calculadora(10,9,restar);
console.log(resultado);

//SINCRONIA Y ASINCRONIA

const nombre = "Miriam";
const saludo = `¡Hola, mi nombre es ${nombre}!`;
console.log(saludo);

function hacersaludo(name) {
    return `¡Hola, mi nombre es ${name}!`;
  }
  
  const nom = "Miriam";
  const saludar = hacersaludo(nom);
  console.log(saludar);
  // "¡Hola, mi nombre es Miriam!"


  console.log("instruccion 1");
  calcular = ()=>2**1000;
  console.log(calcular());
  console.log("instruccion 3");
  console.log("instruccion 4");

//SETTIMEOUT
setTimeout(() =>console.log("Soy un asincrono"), 5000);

setTimeout(function(){
    console.log("Hola Mundo");
}, 2000);

console.log("setTimeout() Ejemplo...");


console.log("Hola 1");
console.log("Hola 2");
setTimeout(() => {
    console.log("Hola 6")
}, 5000);
console.log("Hola 3");
console.log("Hola 4");
console.log("Hola 5");



//SetInterval
setInterval(() => {
    console.log("Hola Mundo")
}, 4000);

let intervalID = setInterval(() => console.log("yo de nuevo"), 3000);

setTimeout(() => {
    clearInterval(intervalID)
}, 6002);


//SORT

let dias = ["Lunes","Martes","Domingo","Jueves","Sabado","Miercoles","Viernes"];
console.log(dias.sort());

let numeros = [10, 50, 4, 2, 15, 90, 1, 80];


//console.log(numeros.sort());
console.log(numeros.sort((a,b)=>a-b));
console.log(numeros.sort((a,b)=>b-a));

// errores y excepciones

console.log("hola");
console.log("juana"); //error sintaxis
    console.log("Pedro");


console.log(juana); // error de referencia

let letras = "abcdfgh";
let numero = 555
console.log(letras.toLocaleUpperCase()); // error de tipo

let arreglo = [a, b, c, d, e];

let nombres= Array(-1);  // error de rango
console.log(nombres);

// manejo de excepciones

try {
    let numero = 555
    console.log(numero.toLocaleUpperCase())
}catch (err){
    console.log("Error: ", err.message)
}

console.log("Continuamos")

sumar();

try {
    sumar();
}catch (error){
    console.log(error.message);
}finally{
    console.log("siempre va ocurrir")
}


let edad=-5

try {
    if (edad<0){
        throw new Error("La edad no puede ser menor a cero");
    }else{
        console.log('edad: ', edad)
    }
}catch(e) {
    console.log('El error es: ', e.message );
}