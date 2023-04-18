const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];

 const rta = users.map(user => user.attributes);
 console.log(rta);
  
 //[ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]
 
 
 const rta2 = users.map(user => user.attributes).flat();
 console.log(rta2);

 //[ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

 const rta3 = users.flatMap(user => user.attributes);
 console.log(rta3);

//  [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};
const rta4 = Object.keys(calendars);//los atributos que tiene un objeto
//const rsta = calendars.flatMap(array = array.startDate);
console.log(rta4);
//[ 'primaryCalendar', 'secondaryCalendar' ]
const rta5 = Object.values(calendars);
console.log(rta5);
/*
[
  [
    {
      startDate: 2021-02-01T20:00:00.000Z,
      endDate: 2021-02-01T20:30:00.000Z,
      title: 'Cita 1'
    },
    {
      startDate: 2021-02-01T22:00:00.000Z,
      endDate: 2021-02-01T23:00:00.000Z,
      title: 'Cita 2'
    }
  ],
  [
    {
      startDate: 2021-02-01T17:00:00.000Z,
      endDate: 2021-02-01T17:30:00.000Z,
      title: 'Cita 2'
    },
    {
      startDate: 2021-02-01T14:00:00.000Z,
      endDate: 2021-02-01T15:00:00.000Z,
      title: 'Cita 4'
    }
  ]
]

*/
const rta6 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log(rta6);
/*
[
  2021-02-01T20:00:00.000Z,
  2021-02-01T22:00:00.000Z,
  2021-02-01T17:00:00.000Z,
  2021-02-01T14:00:00.000Z
]
*/