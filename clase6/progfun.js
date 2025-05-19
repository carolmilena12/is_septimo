/*
 ====================================================
 ✅ SISTEMA DE INVENTARIO USANDO MÉTODOS FUNCIONALES
 ====================================================
 Este script muestra cómo aplicar métodos funcionales
 como forEach(), map(), filter(), reduce(), find(),
 some(), sort() y every() en un sistema de inventarios.*/


 // * Array de productos en el inventario
 const inventario = [
    { id: 1, nombre: 'Laptop', categoria: 'Electrónica', precio: 1200, stock: 20, fechaIngreso: '2025-03-15' },
    { id: 2, nombre: 'Smartphone', categoria: 'Electrónica', precio: 800, stock: 20, fechaIngreso: '2025-03-14' },
    { id: 3, nombre: 'Mouse', categoria: 'Accesorios', precio: 20, stock: 50, fechaIngreso: '2025-03-10' },
    { id: 4, nombre: 'Teclado', categoria: 'Accesorios', precio: 45, stock: 30, fechaIngreso: '2025-03-11' },
    { id: 5, nombre: 'Monitor', categoria: 'Electrónica', precio: 300, stock: 15, fechaIngreso: '2025-03-13' },
    { id: 6, nombre: 'Audífonos', categoria: 'Accesorios', precio: 100, stock: 25, fechaIngreso: '2025-03-12' },
  ];

    // FOR EACH
 //  Itera un elemento de matriz. Usamos forEach solo con arreglos. Toma una función de devolución
 //  de llamada con elementos, parámetro de índice y arreglo en sí. El índice y el arreglo son opcionales.
   //* Mostrar todos los nombres de productos
  //  console.log('📌 Productos en Inventario:');
  //  inventario.forEach(producto => console.log(producto.nombre ="cualquier cosa"));

  //  console.log(inventario)
  

 // MAP
 // Itera los elementos de un arreglo y los modifica. Toma una función de devolución de llamada con elementos, 
 // índice, parámetro de arreglo y devuelve un nuevo arreglo.
   //  Crear un array con nombres en mayúsculas
   const nombresMayus = inventario.map(producto => producto.nombre.toUpperCase());
   console.log('\n Nombres en mayúsculas:', nombresMayus);
  //  const cantidad = inventario.map(producto => producto.stock*0);
  //  console.log('\n stock en cero:', cantidad);
   console.log(inventario);
   
 
   //! 📌 filter
   // ? filtra los elementos que cumplen las condiciones de filtrado y devuelve un arreglo.
   // *🟣 Filtrar productos de categoría "Electrónica"
   const productoscat = inventario.filter(producto => producto.categoria === "Accesorios");
    console.log('\n🔍 Productos Electrónicos:', productoscat);
 
   //! 📌 reduce
   // Reduce toma una función de devolución de llamada. La función de devolución de llamada toma el acumulador,
   // la corriente y el valor inicial opcional como parametro y devuelve un solo valor. Es buena practica
   // definir un valor inicial para el valor del acumulador. Si no especificamo este parametro por defecto el caumuldor tomar el primer elmento del arreglo
   // Si nuestra matriz es una matriz vacía, entonces arrojará un error
   // * Calcular precio total del inventario
  //  array.reduce((acumulador, elementoActual) => {
  //          lógica
  //   return nuevoValorDelAcumulador;
  // }, valorInicial);
  //  const totalPrecio = inventario.reduce((total, producto) => total + (producto.precio * producto.stock),0);
  //  console.log('\n💲 Precio Total del Inventario:', totalPrecio);
 
   //! 📌 find
   //?  Devuelve el primer elemento que cumple la condición
   // *🟠 Buscar un producto específico
  //  const productoTeclado = inventario.find(({precio}) => precio===800);
  //  console.log('\n Precio del teclado:', productoTeclado);
   
   //El método 📌findIndex() en JavaScript 
   // se usa para buscar el índice (posición) de un elemento en un arreglo que cumpla con cierta condición.
   // SINTAXIS array.findIndex(callback(elemento, índice, array))

  //  const ropa = [
  //   { id: 1, nombre: 'Camisa' },
  //   { id: 2, nombre: 'Gorra' },
  //   { id: 3, nombre: 'Zapatos' }
  // ];
  
  // const indice = productos.findIndex(producto => producto.nombre === 'Gorra');
  // console.log(indice); // 👉 1

  
   //! 📌 some
   //?  Comprueba si algunos de los elementos son similares en un aspecto. Devuelve un valor booleano
   // *🔴 Comprobar si algún producto tiene stock bajo (menor a 5)
   const hayStockBajo = inventario.some(producto => producto.stock < 5);
   console.log('\n ¿Hay productos con stock bajo?:', hayStockBajo);
  
   //! sort
   //
   // *🟤 Ordenar productos por precio (menor a mayor)
   const productosOrdenados = [...inventario].sort((a, b) => a.precio - b.precio);
   console.log('\n Productos ordenados por precio:', productosOrdenados);
   // console.log('\n Productos ordenados por precio:', productosOrdenados);
   
   //!  every
   //?  Comprueba si todos los elementos son similares en un aspecto. Devuelve un valor booleano
   // *🟢 Verificar si todos los productos son electrónicos
   const todosElectronicos = inventario.every(producto => producto.categoria === 'Electrónica');
   console.log('\n✅ ¿Todos son electrónicos?:', todosElectronicos);

   
  //  Aplicando la progrmacion funcional
  const productos = [
    { id: 1, nombre: 'Camisa Hombre', categoria: 'Ropa de Hombre', precio: 20, stock: 15 },
    { id: 2, nombre: 'Vestido Mujer', categoria: 'Ropa de Mujer', precio: 30, stock: 10 },
    { id: 3, nombre: 'Anillo de Plata', categoria: 'Joyería', precio: 50, stock: 5 },
    { id: 4, nombre: 'Laptop', categoria: 'Electrónicos', precio: 500, stock: 3 },
    { id: 5, nombre: 'Cámara', categoria: 'Electrónicos', precio: 300, stock: 2 },
    ];
    //? 🔍 Obtener producto por ID
    // const obtenerProducto = (idProducto) => {
    //   const producto = productos.find(({id}) => id === idProducto);
    //   if (producto) {
    //     const { nombre, precio, stock } = producto;
    //     console.log(`Producto: ${nombre}, Precio: ${precio}, Stock: ${stock}`);
    //   } else {
    //     console.log('No se encontró el producto.');
    //   }
    // };
    // obtenerProducto(4);
  
    // obtenerProducto(1);
   
     //? 🔍 Agregar un nuevo producto
     const agregarProducto = (nuevoProducto) => {
       const productoBase = { precio: 0,  stock: 0, };
       const productoARegistrar = { id:productos.length + 1,...productoBase, ...nuevoProducto };
       productos.push(productoARegistrar);
       
     };
     agregarProducto({ nombre: 'Gorra', categoria: 'Ropa de Hombre', precio: 15, stock:20 });
     console.log(productos)
   
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
  
  