function search() {
    console.log("hello from search....");

    const query = document.getElementById('search').value;
    console.log(query);

    fetch(`https://dummyjson.com/products/search?q=${query}&limit=20`)
        .then(response => response.json())
        .then(data => renderUI(data))
        .catch(error => console.error(error));
}


function categories(){
    fetch('https://dummyjson.com/products/category/smartphones?limit=5')
    .then(res => res.json())
    .then(data=>renderUI(data))
    .catch(err => console.error(err));
}

let count=0;
function next(){
    count++;
    let skip = 5*count; 
    console.log("skip",skip);
    const query = document.getElementById('search').value;

    if(query === ""){
    fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
        .then(response => response.json())
        .then(data => renderUI(data))
        .catch(error => console.error(error));
        document.documentElement.scrollTop = 0;
    }
    else{
        fetch(`https://dummyjson.com/products/search?q=${query}&limit=20&skip=${skip}`)
        .then(response => response.json())
        .then(data => renderUI(data))
        .catch(error => console.error(error));
        document.documentElement.scrollTop = 0;
    }

}

function sortlth(){
    fetch('https://dummyjson.com/products?sortBy=price&order=asc')
    .then(res => res.json())
    .then(data => renderUI(data))
    .catch(err => console.error(err));
}

function sorthtl(){
    fetch('https://dummyjson.com/products?sortBy=price&order=desc')
    .then(res => res.json())
    .then(data => renderUI(data))
    .catch(err => console.error(err));
}

const root = document.getElementById('root');

const pr = fetch('https://dummyjson.com/products');

pr.then(res => res.json())
    .then(data => renderUI(data))
    .catch(err => console.error(err));

function renderUI(data) {
    console.log("data",data)
    console.log("data",data.length)
    const products = data.products;
    root.innerHTML = '';

    products.forEach(product => {
        let num = product.price*83;
        let len = num.toString().length;
        num = Math.floor(num);


        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src=${product.thumbnail}>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <h4>₹${num}</h4>
        `;
        root.appendChild(card);
    });
}