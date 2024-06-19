// const arr = require('./script_1.js');
// const [sum, mul] = require('./script_1.js');

// const res = sum(9,10);
// console.log(res);

// const res2 = mul(9,10);
// console.log(res2);


// var figlet = require("figlet");

// figlet("Ashirwad", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


function calc(s, ...arr){
    if(s === 'sum'){
        console.log(arr.reduce((a,b)=>a+b));
    }
    else if(s === 'mul'){
        console.log(arr.reduce((a,b)=>a*b));
    }
}


calc('sum', 10, 20, 30, 40);
calc('mul', 9, 10);