console.log("TRAINING AREA");
// TASK D : 

// Shunday function tuzing, u 2ta string parametr ega bolsin,
//  hamda agar har ikkala string bir hil harflardan iborat
//   bolsa true aks holda false qaytarsin

// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;



function checkContent(str1, str2) {
    let firstString = str1.split("").sort().join("");
    let secondString = str2.split("").sort().join("");

    if (firstString === secondString) {
        return true;
    } else {
        return false;
    }
}

console.log(checkContent("mitgroup", "gmtiprou")); // true

console.log(checkContent("tyler", "john")); // false




























// MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, 
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non,
//  5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 
// 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
// const moment = require("moment");

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qoldiq() {
//         console.log(`Hozir ${moment().format("HH:mm")}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//     }

//     sotish(mahsulot, miqdor) {
//         this[mahsulot] -= miqdor;

//         console.log(`${moment().format("HH:mm")} — ${miqdor}ta ${mahsulot} sotildi`);
//     }

//     qabul(mahsulot, miqdor) {
//         this[mahsulot] += miqdor;

//         console.log(`${moment().format("HH:mm")} — ${miqdor}ta ${mahsulot} qabul qilindi`);
//     }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();

// shop.sotish("non", 3);
// shop.qabul("cola", 4);

// shop.qoldiq();















//TASK B: 

// // Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// let amount = 0;
// function countNumber( input) {
//     for (let i=0; i<input.length; i++) {
//         if (input[i] >= '0' && input[i] <= '9') {
//             amount++;
//         }
//     }
// };

// countNumber('222ddd')
// console.log(amount)





// TASK A

//MASALA IZOHI

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi


//YECHIM:

// let amount=0
// function countLetter(word, letter) {
//     for (let i=0; i<word.length; i++) {
//         if (word[i]==letter) {
//             amount++;
//         }
//     }

// }
// countLetter("banan",'a')
// console.log(amount)






















// const e = require("express");


// console.log("Jack Ma maslahatlari");
// const list = [ 
//     'yaxshi talaba boling', //0-20
//     'togri boshliq tanlang va koproq xato qiling',//20-30
//     'uzingizga ishlashni boshlang', //30-40
//     'siz kuchli bolgan narsalarni qilishingiz kerak', //40-50
//     'yoshlarga investitsiya qiling', //50-60
//     'endi dam oling, foydasi yoq' //60+
// ];

//  async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error('insert a number',null);
//     else if (a<=20 ) return list[0];
//     else if (a<=30 ) return(list[1]);
//     else if (a<=40 ) return(list[2]);
//     else if (a<=50 ) return(list[3]);
//     else if (a<=60 ) return(list[4]);
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }   , 1000);       
//         }); 
//     }
// }

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

// //async, await bilan ishlash##################
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log('javob: ', javob);
//     javob = await maslahatBering(31);
//     console.log('javob: ', javob);
 
// }
// run();