const http = require("http");
const fsPromises = require("fs/promises");

const app = http.createServer(async (req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});

    const route = req.url;
    switch(route){
        case "/":{
            const buffer = await fsPromises.readFile('./pages/index.html');
            res.end(buffer);
            break;    
        }
        case "/products":{
            const buffer1 = await fsPromises.readFile('./pages/products.html');
            res.end(buffer1);
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