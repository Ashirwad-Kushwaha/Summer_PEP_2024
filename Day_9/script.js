// const student = {
//     name : "Ashirwad",
//     rollNo: 16,
//     city: 'Gorakhpur',
//     hobbies: ['Drawing', 'Reading', 'Playing', 'Sleeping']
// }

// const {hobbies} = student;
// console.log(hobbies);

// hobbies[0] = 'Coding';
// console.log(hobbies);

// console.log(student.name);

// const {name, city} = student;
// console.log(name, city);
// console.log(student);

// -----------------------------------------------------

// const fruits = ["apple", "mango", "banana"];

// console.log(fruits[0]);

// const[i1, i2] = fruits;
// console.log(i1, i2);

//--------------------------------------------------------

// rest-> to pack the values 
// spread -> to unpack the values

// const s1 = {
//     name : "Ashirwad",
//     rollNo: 16,
//     city: 'Gorakhpur',
//     hobbies: ['Drawing', 'Reading', 'Playing', 'Sleeping']
// }


// const s2 = {...s1};
// s2.name = "Shubham";
// s2.hobbies[0] = "Coding";

// console.log(s1, s2);

//+----------------

// function sum(num1=0,num2=0,num3=0,num4=0,num5=0){
//     console.log(num1+num2+num3+num4+num5);
// }

// console.log(sum());
// console.log(sum(10));
// console.log(sum(10,20));
// console.log(sum(10,20,11));
// console.log(sum(1,2,10,4));
// console.log(sum(2,4,5,10,2));



// function sum(...nums){
//     let sum = 0;
//     for(let num of nums){
//         sum+=num;
//     }
//     // console.log(sum);
//     return sum;
// }


// function sum(...nums){
//     // console.log(nums);

//     const result = nums.reduce((acc, elem)=>{
//         return acc+elem;
//     })

//     return result;
// }


//-------------------------------------------------

// function getData(){
//     const pr = fetch('https://dummyjson.com/products');

//     pr.then((res)=>{
//         const pr2 = res.json();

//         pr2.then((data)=>{
//             console.log(data);
//         });
//     });
// }

// getData()


async function getData(){
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
}

getData()