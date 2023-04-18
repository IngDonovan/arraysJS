const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id === '🍔');
if (product) {
    myProducts.push(product);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

/*
products [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
----------
*/
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1)
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

/*
products [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
----------

*/

const products2 = products.filter(p => p.id != "🍔");
console.log("Original", products);
console.log('products2', products2);
/**
 Original [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
products2 [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]

 */

//update
const productos = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes:{
        price: 200,
        description:'Delicius'
    }
}//vamos a ctualizar solo al elemento

// const productIndex2 = productos.findIndex(item => item.id === update.id);
// productos[productIndex2] = update.changes;
// console.log(productos);
/**
 [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { price: 200, description: 'Delicius' }
]
//  */
// const productIndex3 = productos.findIndex(item => item.id === update.id);
// productos[productIndex3] = {
//     ...productos[productIndex3],
//     ...update.changes,
//     };
// console.log(productos);


// [
//     { title: 'Pizza', price: 121, id: '🍕' },
//     { title: 'Burger', price: 121, id: '🍔' },
//     { title: 'Hot cakes', price: 200, id: '🥞', description: 'Delicius' }
//   ]

//para hacerlo sin mutar el array

const productIndex4 = productos.findIndex(item => item.id === update.id);
const productsUpdate = productos.map(item => {
    if (item.id === update.id) {
      return {
        ...item,
        ...update.changes,
      }
    }
    return {...item};
  });

console.log("original", productos);
console.log("update", productsUpdate);

/**
 original [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
update [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 200, id: '🥞', description: 'Delicius' }
]
*/

