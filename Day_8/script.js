// const pr = new Promise((resolve, reject) => {
//     let flag = true;

//     if(flag===true){
//         setTimeout(() => {
//             resolve(["apple", "mango"]);
//         }, 4000);
//     }
//     else{
//         reject("Not Done");
//     }
// });

// console.log(pr);
// console.log(pr);


// setTimeout(() => {
//     console.log("done");
// }, 4000);

// setInterval(() => {
//     console.log("hello");
// }, 1000);

// pr.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })


const arr = ["A","B","C","D"];

const res1 = arr.forEach((a,b,c)=>{
    console.log(a,b,c);
})

const arr1 = [1,2,3,4,5];

const res = arr1.forEach((a,b,c)=>{
    console.log(a,b,c);
})

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(x => console.log(Math.sqrt(x)));
// console.log(newArr);

const ages = [3, 10, 18, 20];
const ages1 = ages.filter(x => {if(x>9)console.log(x+" You cant get free ticket")});