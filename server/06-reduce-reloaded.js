const items = [1,2,2,3,3,3,4,1,1,1,1,2];

const reduceArray = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(reduceArray);
/*
{ '1': 5, '2': 3, '3': 3, '4': 1 }
*/

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const reduceLevel = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
    }, {});

    console.log(reduceLevel);

    /*
    { low: 2, medium: 2, hight: 2 }
    */

    const numbers = [1,2,2,3,3,3,4,1,1,1,1,2,5,6,6,7,7,3,6,7,8,9,10,10,10];

const result = numbers.reduce((obj, item) => {
    if (item <= 5) {
        obj['1-5']++
    } else if (item <= 8) {
        obj['6-8']++
    } else {
        obj['9-10']++
    }
    return obj
    }, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
    })

console.log(result)

/*
{ '1-5': 14, '6-8': 7, '9-10': 4 }
*/