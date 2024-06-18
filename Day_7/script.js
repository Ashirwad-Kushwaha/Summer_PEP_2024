// console.log("Start");

// function abc(x){
//     console.log(x*2 );
//     temp(x/2);
// }

// abc(8);

// console.log("mid");

// function temp(x){
//     console.log(x/2);
// }

// console.log("End");

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', cb);

// function cb(){
//     console.log("Button clicked");
// }

// console.log('Start');
// const input = document.getElementsByTagName('input')[0];

// const cb = function abc(ev){
//     console.log('Input is',ev.target.value);
// }


// input.addEventListener('keyup', cb);
// console.log('end');

// console.log('Start');

// const delay = 1000;

// const cb=()=>{
//     console.log('CB called');
// }

// setTimeout(cb, delay);

// console.log('End');

// console.log("Start");

// setTimeout(()=>{
//     console.log('CB called');

//     setTimeout(()=>{
//         console.log('Internal CB called');
//     }, 10000);
// }, 10000);

// console.log('End');


function search() {
    console.log("hello from search....");

    const query = document.getElementById('search').value;
    console.log(query);

    fetch(`http://www.omdbapi.com/?apikey=${'637d0b69'}&s=${query}`)
        .then(response => response.json())
        .then(data => renderUI(data))
        .catch(error => console.error(error));
}

const root = document.getElementById('root');

function renderUI(data) {
    const movies = data.Search;
    root.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src=${movie.Poster}>
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        root.appendChild(card);
    });
}

// const pr = fetch('https://dummyjson.com/products');
// console.log(pr);

// pr.then(res => res.json())
//     .then(data => renderUI(data))
//     .catch(err => console.error(err));

// function renderUI(data) {
//     const products = data.products;
//     // Clear previous products
//     root.innerHTML = '';

//     // Render new products
//     products.forEach(product => {
//         let num = product.price*83;
//         let len = num.toString().length;
//         num = Math.floor(num);

//         console.log(num);
//         const card = document.createElement('div');
//         card.className = 'product-card';
//         card.innerHTML = `
//             <img src=${product.thumbnail}>
//             <h3>${product.title}</h3>
//             <p>${product.description}</p>
//             <h4>₹${num}</h4>
//         `;
//         root.appendChild(card);
//     });
// }
