const arr=[];

async function getData(){
    const res = await fetch('https://makemytrip-backend-w2d2.onrender.com/cities');
    const data = await res.json();
    console.log(data);
    // renderUI(data);

    data.forEach((city)=>{
        arr.push(city);
    })

    renderUI(arr);
}


function search(){
    const query = document.getElementById('search').value;
    console.log(query);
    if(query != ""){
        const newData = arr.filter((cities)=>{
            return cities.city.toLowerCase().includes(query.toLowerCase())
        })
        renderUI(newData);
    }
}


console.log(arr);

getData()

const root = document.getElementById('root');

function renderUI(data) {
    console.log("data",data)
    const cities = data;


    root.innerHTML = '';

    if(data.length === 0){
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="NotFound">No results found</div>
        `;
        root.appendChild(card);
    }
    else{
        cities.forEach(city => {
            const card = document.createElement('div');
            card.className = 'city-card';
            card.innerHTML = `
                <img src=${city.image}>
                <h3>${city.city}</h3>
                <p>${city.description}</p>
            `;
            root.appendChild(card);
        });
    }



}