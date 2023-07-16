const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];


console.log("Ejercicio 1: Las pizzas que tengan un ID impar.")

console.log('------------------------------')

console.log('Las pizzas con ID impar son las siguientes:')

pizzas.forEach( pizza => {
     if (pizza.id % 2 == 1) console.log(` ${pizza.nombre} y el id: ${pizza.id}`);
  }
  )

// const idImpar = pizzas.filter(pizza => pizza.id % 2 == 1 );
//   console.log(idImpar) // este codigo funciona pero solo devuelve el array sin ser userFriendly

console.log('------------------------------')
console.log('Ejercicio 2: Responder: ¿Hay alguna pizza que valga menos de $600?')

const pizzaMasBarata = pizzas.forEach( pizza => {
    if (pizza.precio < 600)  console.log(`La ${pizza.nombre}, sale menos que $600, su precio es de $${pizza.precio}.`)
})


// const precioMinimo = pizzas.reduce((previous, current) => {
//     return current.precio < previous.precio ? current : previous;
// });
  
//   console.log( `La pizza que vale menos de 600$ es :`);

//   console.log(precioMinimo) este codigo funciona pero solo devuelve el array sin ser userFriendly

console.log('------------------------------')
console.log('Ejercicio 3: El nombre de cada pizza con su respectivo precio.')

const nombreYPrecio = pizzas.filter( e =>  console.log(`${e.nombre}, $${e.precio}`))



console.log('------------------------------')
console.log('Ejercicio 4: Todos los ingredientes de cada pizza.')

pizzas.filter(e => {
    let nombre = e.nombre;
    let ingredientes = e.ingredientes.join(', ');

    return console.log(`La ${nombre} tiene estos ingredientes: ${ingredientes}.`)
})







