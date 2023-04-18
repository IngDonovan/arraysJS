const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
//[ 'Dec', 'Feb', 'Jan', 'March' ]
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);
//[ 1, 100000, 21, 30, 4 ]
numbers.sort((a,b) => a - b);
console.log(numbers);
//[ 1, 4, 21, 30, 100000 ]

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log(words);
/**
 [
  'adieu',
  'banana',
  'café',
  'communiqué',
  'premier',
  'réservé',
  'éclair'
]
 */
words.sort((a,b) => a.localeCompare(b));
console.log(words);
/**
 * [
  'adieu',
  'banana',
  'café',
  'communiqué',
  'éclair',
  'premier',
  'réservé'
]
 */

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2021, 1, 1, 9, 30),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date (2021, 8, 2, 2),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date (2021, 9, 12, 3),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date (2021, 3, 8, 4),
    },
];

orders.sort((a,b) => b.total - a.total);
console.log(orders);

/**
 * [
  { customerName: 'Santiago', total: 1840, delivered: true },
  { customerName: 'Nicolas', total: 600, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false }
]
 */

orders.sort((a, b) => b.date.getTime() - a.date.getTime());
console.log(orders);

/**
 
[
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: 2021-10-12T08:00:00.000Z
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: 2021-09-02T07:00:00.000Z
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: 2021-04-08T09:00:00.000Z
  },
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: 2021-02-01T14:30:00.000Z
  }
]
 */