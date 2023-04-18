const matriz = [
    [1,2,3],
    [4,5,6,[6,7,8]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

/*
for [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
for [ 1, 2, 3, 4, 5, 6, [ 6, 7, 8 ], 7, 8, 9 ]
*/
const matriz2 = [
    [1,2,3],
    [4,5,6,[2,3,[4,5,6]]],
    [7,8,9]
];

const rta = matriz2.flat(Infinity);

console.log('flat',rta);

/*

flat [
  1, 2, 3, 4, 5, 6,
  2, 3, 4, 5, 6, 7,
  8, 9
]
*/