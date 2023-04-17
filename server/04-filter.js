const words = ["spray", "elites", "limit", "apple", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('with for', newArray);
console.log('original', words);

/*
with for [ 'elites', 'exuberant' ]
original [ 'spray', 'elites', 'limit', 'apple', 'exuberant' ]

*/
const withFilter = words.filter(item => item.length >= 6);

console.log('with Filter', withFilter);
console.log('original', words);

/*with Filter [ 'elites', 'exuberant' ]
original [ 'spray', 'elites', 'limit', 'apple', 'exuberant' ]*/

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicola",
        total: 1000,
        delivered: false,
    },
  ];

  //vamos a hacer un flitro de las ordenes de compra entregadas

  const filtOrd = orders.filter(item => item.delivered); //por ende como es un booleano nos tomará los true
  console.log('Filtro objetos', filtOrd);

  /*
  Filtro objetos [
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
  */

const filtOrd2 = orders.filter(item => item.delivered && item.total >= 100); //por ende como es un booleano nos tomará los true
  console.log('Filtro objetos', filtOrd2);

  /*
  Filtro objetos [
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
  */

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
};
console.log(search('Nico'));

/*[
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Nicola', total: 1000, delivered: false }
]*/