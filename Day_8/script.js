const pr = new Promise((resolve, reject) => {
    let flag = true;

    if(flag===true){
        setTimeout(() => {
            resolve(["apple", "mango"]);
        }, 4000);
    }
    else{
        reject("Not Done");
    }
});

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