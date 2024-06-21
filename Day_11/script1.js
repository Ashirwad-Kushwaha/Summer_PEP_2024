const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");

const dataText = fs.readFileSync(`${__dirname}/data.json`);
const data = JSON.parse(dataText);
// console.log(data);

const app = http.createServer(async (req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});

    const { query, pathname } =  url.parse(req.url, true);
    // console.log(route);
    switch(pathname){
        case "/":{
            const buffer = await fsPromises.readFile(`${__dirname}/pages/index.html`);
            res.end(buffer);
            break;    
        }    

        case "/products":{
            const buffer1 = await fsPromises.readFile(`${__dirname}/pages/products.html`);
            let text = buffer1.toString();
            let productsText = "";
            for(let i=0; i<data.length; i++){
                productsText += `<div class="product-card">
                <h3>${data[i].title}</h3>
                <p> $${data[i].price}</p>
                <img src=${data[i].thumbnail} alt="image here"/>
                <a href="/view?id=${data[i].id}">Buy Now</a>

                </div>              
                 `
            }      
            text = text.replace("$PRODUCTS$", productsText);
            res.end(text);
            break;   
        }
        
        case "/view":{
            const product = data.find((elem)=>{
                if(elem.id == query.id) return true;
                else return false;
            })
            const buffer = await fsPromises.readFile(`${__dirname}/pages/view.html`);
            let text = buffer.toString();
            let productsView = `<div class="product-card">
            <img src=${product.thumbnail} alt="image here"/>
            <div>
            <h2>${product.title}</h2>
            <p>Brand: ${product.brand}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}</p>
            <p>Price: $ ${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <p>Warranty: ${product.warrantyInformation}</p>
            </div>
            <div class="description">
            <p> ${product.description}</p>
            <a href="/products">Back</a>
            </div>
            </div>`;

            text = text.replace("$PRODUCTSVIEW$", productsView);
            res.end(text);
            break;
        }   
        default:{
            res.end("<h2>Oops! Page Not Found</h2>");
        }
    }
}); 

app.listen(1400, ()=>{
    console.log("Server Started");
})    