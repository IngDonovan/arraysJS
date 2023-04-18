const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];//para que no me dulique en memoria
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
    
}
console.log('for', newArray);

// for [
//     1, 1, 2, 2,
//     3, 3, 4, 4
//   ]
  
const rta = elements.concat(othersElements);
console.log('concat', rta);

/*
concat [
  1, 1, 2, 2, 3,
  3, 4, 4, 3, 3,
  4, 4
]
*/



/*
concat [
  1, 1, 2, 2,
  3, 3, 4, 4
]

*/

//otra forma de clonar los elementos de un array

const rta2 = [...elements, ...othersElements];//si no le envias algo que no sea un array, letra o parrafo
console.log('...', rta2);
/*
... [
  1, 1, 2, 2,
  3, 3, 4, 4
]

*/
const rta3 = [...elements, 'random'];
console.log('...', rta3);
//... [ 1, 1, 2, 2, 'random' ]

const rta4 = [...elements, ...'random'];
console.log('...', rta4);

/*
... [
  1,   1,   2,   2,   'r',
  'a', 'n', 'd', 'o', 'm'
]
*/
elements.push(othersElements);
console.log('elements', elements);

//elements [ 1, 1, 2, 2, [ 3, 3, 4, 4 ] ]

elements.push(...othersElements);
console.log('elements', elements);

/* 
elements [
  1, 1, 2, 2,
  3, 3, 4, 4
]
*/