console.log("Start");

setTimeout(()=>{
    console.log("A");
}, 0);

console.log("Mid");
function abc(){
    console.log('B');
}

function efg(){
    console.log('C');
    setTimeout(()=>{
        console.log('D');
    }, 0);
}

setTimeout(abc, 0);
efg();

console.log("End");