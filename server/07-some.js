const numbers = [1,2,3,4];

let rsta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rsta = true;
        break;
    }
}
console.log(rsta);

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);
//true

//con objetos

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

  const rta3 = orders.some(item => item.delivered);
  console.log(rta3);
 //true

 const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
  };
// sin la libreria

function checkConflict(date1,date2) {
    return date2.startDate <= date1.endDate && date2.endDate >= date1.startDate
}
const searchSomeConflict = (newDate) =>
 dates.some(date => checkConflict(newDate,date));

 console.log( searchSomeConflict({
    startDate: new Date(2021,1,1,15,20),
    endtDate: new Date(2021,1,1,15,40),
    title: "Entrenar",
 })
 );


  //usaremos una libreria  npm i date-fns

  var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping (
            {start:date.startDate, end:date.endDate},
            {start:newDate.startDate, newDate:date.endDate},
        )
    })
  };

  console.log('isOverlap' , isOverlap(newAppointment));