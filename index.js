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

// a)  Las pizzas que tengan un id impar.
console.log(`Resolucion Numero 1:`);
let pizzasImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});

pizzasImpares.forEach((pizza) => {
  console.log(`Pizza ID: ${pizza.id}, Nombre: ${pizza.nombre}`);
});

console.log("/---------------------------------------/");

// b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log(`Resolucion Numero 2:`);

let pizzaBaratas = pizzas.filter((pizza) => {
  return pizza.precio < 600;
});

pizzaBaratas.forEach((pizza) => {
  console.log(`La pizza mas barata es la ${pizza.nombre}`);
});

console.log("/---------------------------------------/");

// c) El nombre de cada pizza con su respectivo precio.
console.log(`Resolucion Numero 3:`);

pizzas.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} vale: ${pizza.precio}`);
});

console.log("/---------------------------------------/");

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log(`Resolucion Numero 4:`);

pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de la ${pizza.nombre} son:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
});
