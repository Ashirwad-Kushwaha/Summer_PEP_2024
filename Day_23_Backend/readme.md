initialize:
    npm init

to install:
    npm i mongodb mongoose nodemon cors express jsonwebtoken bcrypt dotenv
 
folder structure:
    |-main.js
    |-.env
    router
        |-authRoutes.js
    controller
        |-authControllers.js
    model
        |-userModel.js
    config
        |-db.js


procedure:
    1.inside app.js
    --> initialize dotenv
    --> require express, make app, listen to port, port number will come from .env
    --> app.get('/', (req, res)=>{res.send("App is running")})
    ({npx nodemon app.js --> Test if the app is running})