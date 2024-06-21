//custom modules
//external modules
//--> internal modules

// const fs = require("fs");

// const data =fs.readFileSync('./test.txt')

// console.log(data.toString());

// const data2 = fs.readFileSync("./test.txt", {encoding: "utf8"});
// console.log(data2);

//------------------------------------------



// const fs = require("fs");

// console.log("start")
// const data = fs.readFile("./test.txt", {encoding: "utf8"}, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log("end")

//----------------------------------------------

// const fs = require("fs");

// fs.writeFileSync("./custom.txt", "hejehhefiwvb lrvbsdvslcbwelf iwlefbwi");
// const data =fs.readFileSync('./custom.txt')

// console.log(data.toString());


//------------------------------------------------

// const fs = require("fs");

// fs.writeFile("./custom.txt", "hejehhefiwvb lrvbsdvslcbwelf iwlefbwi", (err, data) => {
//     console.log(err, data);
// })

//------------------------------------------------


// const fsPromises = require("fs/promises");

// console.log(Start);

// fsPromises.readFile("./custom.txt", {encoding: "utf8"})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// console.log(End);

//-------------------------------------------------

// const fsPromises = require("fs/promises");

// fsPromises.writeFile("./custom.txt", "helloo world\n")
// .then((data) => {
//     console.log("Done");
// })
// .catch((err) => {
//     console.log(err);
// })

// fsPromises.appendFile("./custom.txt", "helloo world")
// .then((data) => {
//     console.log("Done");
// })
// .catch((err) => {
//     console.log(err);
// })



// fsPromises.appendFile("./custom1.txt", "helloo world")
// .then((data) => {
//     console.log("Done");
// })
// .catch((err) => {
//     console.log(err);
// })

// -----------------------------------------------

const fsPromises = require("fs/promises");

let obj;
let Msum = 0, Ssum = 0;
fsPromises.readFile("./data.json", {encoding: "utf8"})
.then((data) => {
    obj = (JSON.parse(data));
    console.log(obj);
    // obj.forEach(element => {
    //     Msum += element.MathsScore;
    //     Ssum += element.ScienceScore;
    // });
    // console.log(Msum)
    // console.log(Ssum)

    console.log(getObjectById(2, obj));
})
.catch((err) => {
    console.log(err);
})


const getObjectById = (id, arr) => {
    console.log(id, arr);
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].id === id) {
//             return arr[i];
//         }
//     }

const res = arr.find((elem)=>{
    if(elem.id === id) return true;
    else return false;
})
return res;
}

