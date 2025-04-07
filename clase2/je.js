// operadores


let suma = 10 + 4;
console.log(`"La suma es: ${suma}"`);
let resta = 10 -5;
console.log(resta);
let multiplicacion = 2*8;
console.log(multiplicacion);
let division = 8/2;
console.log(division);
let modulo = 5%2;
console.log(modulo);
let potencia = 3**5;
console.log(potencia);

// precedencia

let respuesta = 3*(2+5) -4
console.log(respuesta)

//operaciones combinadas

let x = 10;
// x += 2;
// console.log(x); 
x -= 4;
console.log(x); 
x=5;
x *= 5;
console.log(x); 
x /= 2;
console.log(x);
x **= 2;
console.log(x);
x %= 4;
console.log(x);

//  operadores aritmeticos
let a = 10;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// unarios

let cadena = "10";
console.log(typeof(cadena));
let convertir = +cadena;
console.log(convertir);
console.log(typeof(convertir));

let cadena1 = '8';
console.log(typeof(cadena1));
let convertir1 =-cadena1;
console.log(typeof(convertir1));
console.log(convertir1)

// incremento decremento
let d = 7;
console.log(d++);

console.log(d);

let p = 9;
console.log(++p);

console.log(p);

let r = 7;
console.log(r--);
console.log(r);

let s = 9;
console.log(--s);
console.log(s);

// operadores logicos

let bandera = true;
let estado = false;

console.log(bandera && estado); // Devuelve true si ambos valores son verdaderos. Sino, false.
console.log(bandera || estado); // Devuelve true si alguno de los dos valores es verdadero. Sino, devuelve false.
console.log(!estado); // Devuelve el valor opuesto (se dice que niega el valor).

// and

console.log(var1&&var2); // si var 1 es true devuelve var2
console.log(var1&&var2); // si var 1 es falso devuelve var1
console.log(var1&&var2);
console.log(var1&&var2);

//or        var1 || var2
console.log(true||true); // si var 1 es verdadero devuelve la var1
console.log(true||false);
console.log(false||true); // si var 1 es falso devolver la var2
console.log(false||false);

//not
console.log(!true);
console.log(!false);

// operadores logicos con valores no booleanos
console.log(0 || "texto");


console.log(1 || "Martin");

console.log(0 && "texto");

console.log(1 && "texto");
console.log(1 && null);

console.log(5 && null);

console.log(null && "texto");

console.log(0 && null);
console.log(null && undefined);

console.log(0 || null);

console.log(10 || "texto");

console.log(0 || "texto");

console.log("texto"|| null);

// comparaciones
console.log(10 == "10");

console.log(10 === "10");

console.log(10 != "10");

console.log(10 !== "10");

console.log(10 > 5);

console.log(10 < 5);

console.log(10 >= 10);

console.log(10 >= 5);

//condicionales
let edad = 20;
if (edad>=18){
    console.log("Eres Mayor de  edad ya puedes sacar la licencia");
}else {
    console.log("no puedes sacar licencia")
}

let activo = 1;
let interruptor= activo ? "Encendido" : "Apagado";
console.log(interrutor);

let salida = "Carmen";
let fiesta= salida ? "sale a la fieste" : "No sale a la fiesta";
console.log(fiesta);

let esmayor = 0;
if (esmayor){
    console.log("Felicidades!! 😊 puedes participar");
} else {
    console.log("Lo sentimos 😪, no puedes participar");
}

let nota = 30;
if (nota>=90) {
    console.log("Aprobaste con excelencia y certificado de Felicitacion");
} else if (nota>=80) {
    console.log("Aprobaste con excelencia, sigue adelante");
}else if (nota>=70) {
    console.log("Aprobaste satifactoriamente, aun puedes mas");
} else if (nota>=60) {
    console.log("Aprobaste con buena calificacion, pero puedes mejorarr");
} else {
    console.log("REPROBADO")
}
    
//switch


let dia = "Sabado";
switch (dia){
    case "Lunes":
        console.log("Clases de python")
        break;
    case "Martes":
        console.log("Clases de laravel")
        break;
    case "Miercoles":
        console.log("Clases de Node JS")
        break;
    case "Jueves":
        console.log("Clases de Kotlin")
        break;
    default:
        console.log("DESCANSO !!");
        
}

// while 
let contador = 0;
while (contador < 10){
    ++contador;
    console.log(contador);
}

for (let i = 1; i<=10; i++) {
    console.log(i)
}

let z = 1
do {
    console.log(z);
    z++;
} while (z<10);
