// WHILE
let contador = 1;

while (contador <=5) {
    console.log(`El numero es: ${contador}`)
    contador++
}

// FOR 
for (let i=1; i<=5;i++){
    console.log(i);
}

let contador1 = 1;
do {
    console.log(contador1);
    contador1++
} while (contador1<=5)

let persona = {nombre: "Juan", edad: "20", ciudad:"Cochabamba"}

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

let colores = ["rojo","verde","azul","blanco"];

for (let color of colores){
    console.log(color);
}

for (let i=1; i<20; i++){
    if (i===10)break;
    if (i%2===0)continue;
    console.log("numero impar es: " + i);
}

let numbers= [4, 6, 7, 8, 9, 10, 25];

console.log(numbers.reverse());


// console.log(numbers.length) // muestra el numero de elementos del arreglo
// console.log(numbers[numbers.length-1])  // muestra el ultimo elemeto de mi arreglo

// for (let i= numbers.length-1; i >=0 ; i--){
//     console.log(numbers[i])
// }

//COMBINACION ENTRE BUCLES Y CONDICIONALES

for (let i=1; i<=10; i++){
    if (i%2==0){
        console.log(i + "  es par");
    }else {
        console.log(i + " es impar");
    }

}

// FUNCIONES.
//funcion basica
function saludar(){
    console.log("Hola, Buenos Dias");
}
saludar();

// funcion con parametros y argumentos
function sumar(a,b){
    return a+b;
}
let resultado = sumar(6,8);
console.log(resultado)

function restar(a,b){
    return a-b;
}

console.log(restar(10,3));

//Funciones que no retornan nada VOID
function imprimir(mensaje){
    console.log(`El mensaje es: ${mensaje}`);
}
imprimir("Estamos en clases de JavaScript")

// valors por defecto
function saludar_Persona(nombre = "Carlos"){
    console.log("Hola " + nombre)
    }
saludar_Persona()

// ejecutar varias veces
function saludarPersona(nombre){
    console.log("Hola " + nombre)
    }
saludarPersona("Ana");
saludarPersona("Jorge");
saludarPersona("Pamela");
saludarPersona("Sonia");
saludarPersona("Dilma");

function potencia(numero, exponente){
    return numero**exponente;
}

console.log(potencia(2,5));
console.log(potencia(3,2));

// Funciones que llaman a otras funciones
function cuadrado(num){
    return num*num;
}
//console.log(cuadrado(2));

function cubo(num){
    return cuadrado(num)*num;
}
console.log(cubo(3));

//Funciones con variables locales

function calcular_area(base=5, altura=2){
    let area = base *altura;
    return area;
}

console.log(calcular_area());

//retorno
function mostrarNombres(nombre1,nombre2){
    return nombre1,nombre2;
    
}

console.log(mostrarNombres("Juan","Maria"))

//VALIDACION DE PARAMETROS
function dividirNumeros(a,b){
    if (b===0){
        return "El numero b no puede ser cero";
    } 
    return a/b;
}

console.log(dividirNumeros(9,0));
console.log(dividirNumeros(9,3));

function sumar(a,b){
    if (typeof(a) !== "number" || typeof(b) !== "number"){
        return "ERROR. Ingrese solo numeros!!";
    }
    return a-b;
}

console.log(sumar(15,"cinco"));

//funciones flecha () => {}

function name1(params) {
    
}
name1()

const flecha = ()=> {console.log("Hola, soy una funcion flecha")};
flecha();

function cuadrado(numero) {
    return numero*numero
}
console.log(cuadrado(5));

function doble(x) {
    return x*2;
}

let elevarCuadrado = (numero) =>numero*numero;
console.log(elevarCuadrado(4));

const adicion = (a,b)=> {
    resultado = a+b;
    return resultado;
}
console.log(adicion(8,10))

function dividirDosNumeros(x,y) {
    return x/y;
}

//CALLBACKS

function procesarDato(number, callback){
    console.log("Procesando numero" , number);
    callback(number)
}

procesarDato(4, (number)=>console.log("Numero Procesado", number*3))