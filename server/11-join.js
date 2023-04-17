const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for', rtaFinal);
//for Fire--Air--Water--
const rta = elements.join('--');
console.log('Join', rta);
//Join Fire--Air--Water

const title = 'Curso de manipulación de arrays';
const urlFinal= title.split(' ').join('-').toLowerCase();
//[ 'Curso', 'de', 'manipulación', 'de', 'arrays' ]
console.log(urlFinal);
//curso-de-manipulación-de-arrays
