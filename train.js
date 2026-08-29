const e = require("express");

console.log("TRAINING AREA");

console.log("Jack Ma maslahatlari");
const list = [ 
    'yaxshi talaba boling', //0-20
    'togri boshliq tanlang va koproq xato qiling',//20-30
    'uzingizga ishlashni boshlang', //30-40
    'siz kuchli bolgan narsalarni qilishingiz kerak', //40-50
    'yoshlarga investitsiya qiling', //50-60
    'endi dam oling, foydasi yoq' //60+
];

 async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error('insert a number',null);
    else if (a<=20 ) return list[0];
    else if (a<=30 ) return(list[1]);
    else if (a<=40 ) return(list[2]);
    else if (a<=50 ) return(list[3]);
    else if (a<=60 ) return(list[4]);
    else {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(list[5]);
            }   , 1000);       
        }); 
    }
}

    // else setTimeout(function() {
    //     callback(null, list[5]);
    // }, 5000);




//then, catch bilan ishlash##################
//  console.log('passed here 0');

//  maslahatBering(55)
// .then((result) => {
//     console.log('javob: ', result);
// })
// .catch((error) => {
//     console.error('xatolik: ', error);
// });
// console.log('passed here 1');   

//async, await bilan ishlash##################
async function run() {
    let javob = await maslahatBering(20);
    console.log('javob: ', javob);
    javob = await maslahatBering(31);
    console.log('javob: ', javob);
 
}
run();