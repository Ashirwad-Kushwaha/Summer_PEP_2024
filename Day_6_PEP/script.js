// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = secondSection.getElementsByTagName('h4');
// title[0].innerText="JS Callbacks"

// const title = document.getElementsByTagName('section')[1].getElementsByTagName('h4')
// title[0].innerText="JS Callbacks 123";

// const titlee = document.querySelector("section:last-of-type>h4")
// titlee.style.color = 'brown'

// titlee.setAttribute('class', 'css2')

// const p = document.createElement("p");
// const sec = document.getElementsByTagName('section')[0]

// sec.appendChild(p)
// p.innerHTML="helloooooooooooo"

// sec.appendChild(p)
// sec.append("Hello World")
// sec.appendChild("new world!!!!")

// function printHello(){
//     console.log("Hello");
// }
// function inputClicked(){
//     console.log("inputClicked");
// }
// function inputKeydown(e){
//     console.log("inputKeydown");
//     console.log(e.target.value);
// }
// function inputChanged(e){
//     console.log("inputChanged");
//     console.log(e.target.value);
// }

function handleUserName(e){
    console.log("Name: ",e.target.value);
}

function handleUserAge(e){
    console.log("Age: ",e.target.value);
}

function handleSubmit(e){
    e.preventDefault();

    const userName = e.target[0].value;
    const userAge = e.target[1].value;

    

}