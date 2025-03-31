// alcance o scope
let paisA = "Bolivia"

{
    var depto1 = "La Paz";
    let depto2 = "Cochabamba";
    let depto3 = "Santa Cruz";
    console.log(depto1);
    
}

console.log(paisA);

let paisB = "Argentina"

{
    let depto1 = "Buenos Aires";
    let depto2 = "Rosario";
    let depto3 = "Cordova";
    console.log(depto2)

   
}
console.log(paisB);



// splice
let numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// numeros.splice(2, 2); 
// Elimina 1 elemento en el índice 2 (resultado: [1, 2, 4, 5])
//console.log(numeros);
// Inserta 99 en el índice 1 sin eliminar (resultado: [1, 99, 2, 4, 5])
numeros.splice(1, 0, 99); 
console.log(numeros);

//slice
let nombreR = "Roberto";
nombreR= nombreR.slice(1,3)
console.log(nombreR)

//split
let textFruta = "banana naranja papaya manzana"
let arrayFrutas = textFruta.split(" ");
console.log(textFruta);
console.log(arrayFrutas);

let saludo = "Hola a todos"
let arregloSaludo = saludo.split(" ");
console.log(arregloSaludo);

// conversiones explicitas
 let cadena = "12345";
 console.log(typeof(cadena))
 let numero_a = 123456;
 let bandera = true;

 let num1=Number(cadena)
 console.log(typeof(num1))



console.log(typeof(cadena)); //number  

bandera = Number(bandera);
console.log(typeof(bandera)); // number
console.log(bandera);  

//ARREGLOS
 let dia = "lunes";
 let dias = ["lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
 let arreglo = [110, "Carlos", true, [1,2,3]];
 const mascotas = ["🐕","🐱","🐒",["🍗","🐟","🍌"]];
 console.log(mascotas[0]);
 console.log(mascotas[3][0]);
 
 console.log(dias[0]);
 console.log(dias[6]);
 console.log(arreglo[3][0]);
 
 // lenght
let nombre = "Juan";
size = nombre.length;
console.log(size);

let nombres = ["Ana","Bob","Adan","Cony", "Elena"]
console.log(nombres.length);

 nombres[5] = "Flor";
 console.log(nombres)

// indexof
let nombres = ["Ana","Bob","Adan","Cony", "Elena"]
console.log(nombres.indexOf("Adan")); // 2
console.log(nombres.indexOf("Gary")); // -1

// push pop shift unshift
let nombres = ["Ana","Bob","Adan","Cony", "Elena"];
nombre = nombres.pop();
console.log(nombres); 
let persona = {
    nombre: "Carlos",
    sexo: "Hombre",
    correo : "carlos@gmail.com",
    telefono : 70745689
}

console.log(persona.nombre);