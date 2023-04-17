const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log('for', includeInArray);

const rta =pets.includes(item => item === 'dog');// cuidado
console.log('includes', rta);

/*
for true
includes false porque toca enviarle solo el elemento
*/

const rta2 =pets.includes('dog');
console.log('includes', rta2);

//includes true



function filterByTerm(array, term) {
    // Tu código aquí 👈
        return array.filter(item => {
            return item.includes(term);
        });
  }

const rta3 = filterByTerm(["ana", "santi", "nico", "anastasia"],"ana")
console.log(rta3);