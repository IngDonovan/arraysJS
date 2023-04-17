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
  ];


  const rta = orders.map(item => item.total);
  console.log('original',orders);
  console.log('totales',rta);

  //totales [ 60, 120, 180, 240 ]

  //agregar un nuevo atributo tax

  const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
  });
console.log('rta2', rta2);
console.log('original', orders);

/*rta2 [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]*/
//pero mutò la principal: cuando generamos una copia en memoria el la trae, con primitivos no pasa pero con arrays y objetos si
/*original [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]*/
//la propuesta es usar spread operator ...

const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    };
});
console.log('rta3', rta3);
console.log('original', orders);

/*rta3 [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
original [
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]*/