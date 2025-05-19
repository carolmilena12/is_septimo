//DESESTRUCTURACION
// tenemos un array con un nombre y apellido
let arr = ["John", "Smith"]

//asignación desestructurante
// let firstName = arr[0];
// let surname = arr[1]

let [nombre, apellido] = arr;
console.log(nombre);


let numeros = [8, 15, 56];
let [num3,num2,num1] = numeros;
console.log(num3, num2,num1);

let personas = ["Juan","Maria","Carlos","Roman"];
let [n1,,n2,n3] = personas;
console.log(n3,n2,n1);

const ciudades=[["La Paz","Tarija","Oruro"],["Lima","Puno","Arequipa"]];

const [Bolivia,Peru] = ciudades;
const [ciudad1,ciudad2,ciudad3]= Bolivia;
const [dep1,dep2,dep3]= Peru;
 console.log(dep2);

 let numPares = [2,4,6,8]
 let copiaPares = numPares;

 console.log(copiaPares);
 copiaPares.push(12);
 console.log(copiaPares);
 console.log(numPares)

 console.log(pares)

  // DESESTRUCTURACION DURANTE LA ITERACION
  let paises = [["Bolivia","Oruro"],["Chile","Santiago"],["Peru","Lima"],["Brasil","Sao Paulo"]];
  let [primero, segundo,tercero,cuarto]=paises;
  let [p1,c1]=primero;
  let [p2,c2]=segundo;
  let [p3,c3]=tercero;
  let [p4,c4]=cuarto;
  console.log(`Pais: ${p1} --> ciudad: ${c1}`)
  console.log(`Pais: ${p2} --> ciudad: ${c2}`)
  console.log(`Pais: ${p3} --> ciudad: ${c3}`)
  console.log(`Pais: ${p4} --> ciudad: ${c4}`)

  for (const [pais,ciudad] of paises){
    console.log(`Pais: ${pais} -- ciudad: ${ciudad}`)
  }

  //Desestruturaion de objetos 

const rectangulo = {altura:"20", base:"10", area:"200"};
let {base,area,altura,perimetro=60} = rectangulo;
console.log(base,area,altura,perimetro);

 // Si la clave no se encueenta en el objeto la variable se le asignara indefenido
 // En ocasiones la clave podria no estar en el objeto en ese caso podemos asignar un valor predeterminado durante la declaracion

 //let {altura, base, area, perimetro=60} = rectangulo;

 // Desestructuracion de ibjetos durante la iteracion
const cArros = [
    {
    id:1,
    marca:"8:0suski0",
    modelo: "2020"
    },
    {
    id:1,
    marca:"hiundai",
    modelo: "2020"
    },
   {
    id:1,
    marca:"8:00toyota",
    modelo: "2020"
    }
  ]

for (const {id, marca, modelo} of cArros){
    console.log(id, marca, modelo);
}

const pares=[0,2,4,6,8,10]

const impares=[1,3,5,7,9]

  const paresCopia= [...pares]
  paresCopia.push(12)
  console.log(paresCopia);
  console.log(pares)
  const imparesCopia= [...impares]
  imparesCopia.push(11)
  console.log(imparesCopia);
  console.log(imparesCopia);
  console.log(pares);
  console.log(impares);

//PROPAGACION ... spread operator
let a, b, restante;
[a, b] = [10, 20];

[a, b, ...restante] = [10, 20, 30, 40, 50];
console.log(restante);

//? Arreglos


const nums=[1,2,3,4,5,6,7,8,9,10]
let [nu1,nu2,nu3,...otros]=nums
console.log(nu1,nu2,nu3,otros);

const pares=[0,2,4,6,8,10]
const impares=[1,3,5,7,9]
  const todos= [...pares, ...impares]
  console.log(todos);


  let nombres = ["ana","ema", "alex", "rosa"]
  let nombrescopia = [...nombres]
  nombrescopia.push("Arandia");
  console.log(nombres);
  
  // Objetos
  const usuario={
    nombre:'Roberto',
    pais:'Colombia',
    ciudad:'Bogota'
  }
  
  let usuarioCopia= {...usuario}
  usuarioCopia.telefono='123123'
  console.log(usuarioCopia);
  console.log(usuario);

let lenguajes= [["React","Xpress","Node"],["MongoDB","MySQL","Postgres"]];
for (const [l1,l2,l3] of lenguajes) {
  console.log( `lenguaje: ${l1} ${l2}` );
}

let carros= [["React","Xpress","Node"],;
for (const [l1,l2,l3] of lenguajes) {
  console.log( `lenguaje: ${l1} ${l2}` );
}

let materias = ["analisis", "ia", "redes"]



/*                                               EJERCICIOS
==========================================================================================================================
DESESTRUCTURAR LOS SIGUIENTES ARREGLOS Y MOSTRAR EN CONSOLA TODAS LA REPUESTAS DEBENTENR FORMATO CON BACKTIC Y ALGUNA DESCRPCION
1. let lenguajes= [["React","Xpress,"Node"],["MongoDB","MySQL","Postgres"]] sin iterar
2. let alimentos = [["fruta","papaya",],["verdura","zanahoria"],["legumbre","habas"]] con iteracio for..of
3. let persona = {nombre: "Sara", edad:25, pais: "Colombia",  trabajo: "Desarrollador"}; sin iterar
4. Crear un arreglo de objetos que guarde 3 objetos de la clase Carro y mostrar  en consola con iteracion for..of
=============================================================================================================================*/

//DESUSTRUCTURACION Y PROPAGACION PROYECTO
  //? Productos iniciales
  const productos = [
  { id: 1, nombre: 'Camisa Hombre', categoria: 'Ropa de Hombre', precio: 20, stock: 15 },
  { id: 2, nombre: 'Vestido Mujer', categoria: 'Ropa de Mujer', precio: 30, stock: 10 },
  { id: 3, nombre: 'Anillo de Plata', categoria: 'Joyería', precio: 50, stock: 5 },
  { id: 4, nombre: 'Laptop', categoria: 'Electrónicos', precio: 500, stock: 3 },
  { id: 5, nombre: 'Cámara', categoria: 'Electrónicos', precio: 300, stock: 2 },
  ];
  //? 🔍 Obtener producto por ID
  const obtenerProducto = (idProducto) => {
    const producto = productos.find(({id}) => id === idProducto);
    if (producto) {
      const { nombre, precio, stock } = producto;
      console.log(`Producto: ${nombre}, Precio: ${precio}, Stock: ${stock}`);
    } else {
      console.log('No se encontró el producto.');
    }
  };
  obtenerProducto(4);

  obtenerProducto(1);
 
   //? 🔍 Agregar un nuevo producto
   const agregarProducto = (nuevoProducto) => {
     const productoBase = { stock: 0, disponible: true };
     const productoARegistrar = { ...productoBase, ...nuevoProducto, id: productos.length + 1 };
     productos.push(productoARegistrar);
     console.log('Producto agregado exitosamente:', productoARegistrar);
   };
 
   //? 🔍 Actualizar un producto
   const actualizarProducto = (idProducto, cambios) => {
     const index = productos.findIndex(({ id }) => id === idProducto);
     if (index !== -1) {
       productos[index] = { ...productos[index], ...cambios };
       console.log('Producto actualizado exitosamente:', productos[index]);
     } else {
       console.log('No se encontró el producto.');
     }
   };
 //? 🔍 Listar todos los productos
 const listarProductos = () => {
    productos.forEach(({ nombre, precio, stock, categoria }) => {
      console.log(`Producto: ${nombre}, Categoría: ${categoria}, Precio: ${precio}, Stock: ${stock}`);
    });
  };

  // Ejemplos de uso:
  listarProductos();
  obtenerProducto(1);
  agregarProducto({ nombre: 'Gorra', categoria: 'Ropa de Hombre', precio: 15 });
  actualizarProducto(3, { stock: 8 });
  listarProductos();

