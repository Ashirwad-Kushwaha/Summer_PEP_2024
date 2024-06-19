async function getData(){
    const res = await fetch('https://makemytrip-backend-w2d2.onrender.com/cities');
    const data = await res.json();
    console.log(data);
    renderUI(data);
}

getData()

const root = document.getElementById('root');

function renderUI(data) {
    console.log("data",data)
    const cities = data;
    root.innerHTML = '';

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