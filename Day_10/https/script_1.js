const http = require("http");
const fs = require("fs/promises");

const app = http.createServer(async (req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    
    const route = req.url;
    switch(route){
        case "/":
            const stream = await fs.readFile('./pages/index.html');
            res.end(stream);
            break;
            case "/products":
            const stream2 = await fs.readFile('./pages/products.html');
            res.end(stream2);
            break;
        default:
            res.end("404");
    }

});

//http://localhost:1400
app.listen(1400, ()=>{
    console.log("Server Started");});