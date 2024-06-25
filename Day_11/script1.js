const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");

const dataText = fs.readFileSync(`${__dirname}/data.json`);
const data = JSON.parse(dataText);

const app = http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const { query, pathname } = url.parse(req.url, true);

    switch (pathname) {
        case "/": {
            const buffer = await fsPromises.readFile(`${__dirname}/pages/index.html`);
            let text = buffer.toString();
            let homeText = `
            <div id="home">          
            <h2 id="heading">Some common categories  </h2>
            <div id="box"> 
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="image here"/>
             <a href="/category?category=groceries">Groceries</a>
            </div>
            <div id="box">
            <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400" alt="image here"/>
            <a href="/category?category=smartphones">Smartphones</a>
            </div> 
            <div id="box">
            <img src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <a href="/category?category=fragrances">Fragrances</a>
            </div>
            </div>
            <div id="categories">
            <h2 id="heading">Other Categories</h2>
            <a href="/category?category=womens-jewellery">Womens Jewellery</a>
            <a href="/category?category=kitchen-accessories">Kitchen Accessories</a>
            <a href="/category?category=mens-shoes">Mens Shoes</a>  
            <a href="/category?category=beauty">Beauty Products</a>  
            <a href="/category?category=home-decoration">Home Decoration</a>  
            <a href="/category?category=laptops">Laptops</a>  
            <a href="/category?category=skin-care">Skin Care</a>  
            <a href="/category?category=tablets">Tablets</a>  
            <a href="/category?category=sunglasses">Sunglasses</a>  
            </div>
            `;
            text = text.replace("$HOME$", homeText);
            res.end(text);
            break;
        }
        case "/products": {
            const buffer1 = await fsPromises.readFile(`${__dirname}/pages/products.html`);
            let text = buffer1.toString();
            let productsText = "";
            for (let i = 0; i < data.length; i++) {
                productsText += `<div class="product-card">
                <h3>${data[i].title}</h3>
                <p>$${data[i].price}</p>
                <img src=${data[i].thumbnail} alt="image here"/>
                <a href="/view?id=${data[i].id}">Buy Now</a>
                </div>`;
            }
            text = text.replace("$PRODUCTS$", productsText);
            res.end(text);
            break;
        }
        case "/category": {
            const products = data.filter((ele) => ele.category == query.category);
            const buffer1 = await fsPromises.readFile(`${__dirname}/pages/category.html`);
            let text = buffer1.toString();
            let productsText = "";
            for (let i = 0; i < products.length; i++) {
                productsText += `<div class="product-card">
                <h3>${products[i].title}</h3>
                <p>$${products[i].price}</p>
                <img src=${products[i].thumbnail} alt="image here"/>
                <a href="/view?id=${products[i].id}">Buy Now</a>
                </div>`;
            }
            text = text.replace("$PRODUCTS$", productsText);
            res.end(text);
            break;
        }
        case "/view": {
            const product = data.find((elem) => elem.id == query.id);
            const buffer = await fsPromises.readFile(`${__dirname}/pages/view.html`);
            let text = buffer.toString();
            let productsView = `<div id="product-view">
            <div class="product-card">
            <img src=${product.thumbnail} alt="image here"/>
            <div>
            <h2>${product.title}</h2>
            <p>Brand: ${product.brand}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}</p>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <p>Warranty: ${product.warrantyInformation}</p>
            <button type="button" value="buy">Buy Now</button>
            <button type="button">Add To Cart</button>
            </div>
            </div>
            <div class="description">
            <p>${product.description}</p>
            <a href="/products">Back</a>
            </div>
            </div>`;
            text = text.replace("$PRODUCTSVIEW$", productsView);
            res.end(text);
            break;
        }
        case "/search": {
            const searchTerm = query.query.toLowerCase();
                const product = data.filter(product =>
                    product.category.toLowerCase().includes(searchTerm) ||
                    product.title.toLowerCase().includes(searchTerm)
                );
            // console.log(product);
            const buffer = await fsPromises.readFile(`${__dirname}/pages/search.html`);
            let text = buffer.toString();
            let productsView = "";
            for (let i = 0; i < product.length; i++) {
                productsView += `<div class="product-card">
                <h3>${product[i].title}</h3>
                <p>$${product[i].price}</p>
                <img src=${product[i].thumbnail} alt="image here"/>
                <a href="/view?id=${product[i].id}">Buy Now</a>
                </div>`;
            }
            text = text.replace("$HOME$", productsView);
            res.end(text);
            break;
        }
        default: {
            res.end("<h2>Oops! Page Not Found</h2>");
        }
    } 
});

app.listen(1400, () => {
    console.log(`Server is runnig at http://localhost:1400`);
});
  