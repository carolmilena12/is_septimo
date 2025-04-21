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

    // for ....in  se utiliza para recorer objetos

let persona = {nombre: "Juan", edad: "20", ciudad:"Cochabamba", materia: "analisis"}

for (let propiedad in persona) {
    console.log(propiedad, persona[propiedad]);
}

// for ...of  esto es para recorrer los arreglos
let colores = ["rojo","verde","azul","blanco"];

for (let color of colores){
    console.log(color);
}

for (let i=1; i<20; i++){
    if (i===10)break;
    if (i%2===0)continue;
    console.log("numero impar es: " + i);
    console.log("no es par")
}

let numbers= [4, 6, 7, 8, 9, 10, 25];

console.log(numbers.reverse());


console.log(numbers.length) // muestra el numero de elementos del arreglo
console.log(numbers[numbers.length-1])  // muestra el ultimo elemeto de mi arreglo

// for (let i= numbers.length-1; i >=0 ; i--){
//     console.log(numbers[i])
// }

console.log(numbers.reverse());

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

console.log(sumar(5,20))

function restar(a,b){
    return a-b;
}

console.log(restar(10,3));

//Funciones que nsumaro retornan nada VOID
function imprimir(mensaje){
    console.log(`El mensaje es: ${mensaje}`);
}
imprimir("Estamos en clases de JavaScript")

// valors por defecto
function saludar_Persona(nombre ="Carlos"){
    return "hola" + nombre;
    }

console.log(saludar_Persona());

// ejecutar varias veces
saludarPersona("Ana");

saludarPersona("Jorge");
saludarPersona("Pamela");
saludarPersona("Sonia");
saludarPersona("Dilma");
function saludarPersona(nombre){
    console.log("Hola " + nombre)
    }

function potencia(numero, exponente){
    return numero**exponente;
}

console.log(potencia(2,5));
console.log(potencia(3,2));

// Funciones que llaman a otras funciones
function cuadrado(num){
    return num*num;
}


function cubo(num){
    return cuadrado(num)*num;
}
console.log(cubo(3));

//Funciones con variables locales

function calcular_area(base=5, altura=2){
    let area = base *altura;
    return area;
}
calcular_area()

function mostrarfruta(a,b,c){
       return [a,b,c];
}
console.log(mostrarfruta("🍎","🍇","🍊"));




//retorno
function mostrarNombres(nombre1,nombre2){
    return [nombre1, nombre2];    
}

console.log(mostrarNombres("Juan","Maria"))

//VALIDACION DE PARAMETROS
function dividirNumeros(a,b){
    if (b===0){
        return "El numero b no puede ser cero";
    } 
    return a/b;
}

//console.log(dividirNumeros(9,0));
console.log(dividirNumeros(9,3));

function saludoAmigo(a,b){
    if (typeof(a) !== "string" || typeof(b) !== "string"){
        return "Ingrese nombres no numeros!!";
    }
    return `${a} saluda a ${b}`;
}

console.log(saludoAmigo("Juan",20));



//funciones flecha () => {}

function saludar2(params) {
    console.log("hola soy unafuncion clasica o normal")
}
name1()

const suma = (a,b)=>a+b;
console.log(suma(1,7)) ;

const flecha = ()=>console.log("Hola, soy una funcion flecha");
flecha();

const doble = (n) => n * 2;
console.log(doble(4));


function cuadrado(numero) {
    return numero*numero
}

const cuadrado = (numero)=>numero*numero;



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

const dividir2 = (a, b) => a/b;
console.log(dividir2(100, 2));
//CALLBACKS



function procesarDato(number, callback){
    console.log("Procesando numero" , number);
    callback(number)
}

procesarDato(4, (number)=>console.log("Numero Procesado", number*3))