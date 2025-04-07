


alert ("Bienvenidos a nuestra pagina");

let m = prompt ("Ingrese su nombre");


// document.getElementById("mensaje").innerHTML = `Bienvenido: ${m}`;

let estado = confirm("Eres mayor de edad?");

if (estado) {
    document.getElementById("chiste").innerHTML = "Doctor, ¿tendré cura?: Por supuesto, cura, misa y funeral";
}