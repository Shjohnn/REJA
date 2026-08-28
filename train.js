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

function maslahatBering(a, callback) {
    if (typeof a !== 'number') callback('insert a number',null);
    else if (a<=20 ) callback(null, list[0]);
    else if (a<=30 ) callback(null, list[1]);
    else if (a<=40 ) callback(null, list[2]);
    else if (a<=50 ) callback(null, list[3]);
    else if (a<=60 ) callback(null, list[4]);
    else setTimeout(function() {
        callback(null, list[5]);
    }, 5000);
}

console.log("passed here 0 ");

maslahatBering(25, function(err, data) {
    if (err) console.log(err);
    else console.log('javob:', data);
});

console.log("passed here 1");