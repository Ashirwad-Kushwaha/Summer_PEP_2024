
const { MongoClient, ServerApiVersion } = require('mongodb');




const uri = "mongodb+srv://<username>:<password>@cluster0.7rzrvbq.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

let dbUrl = uri;
dbUrl = dbUrl.replace("<username>", process.env.DB_USERNAME);
dbUrl = dbUrl.replace("<password>", process.env.DB_PASSWORD);
dbUrl = dbUrl.replace("<dbName>", process.env.DB_NAME);

const client = new MongoClient(dbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db(process.env.DB_NAME);
const productsCollection=database.collection("products");



module.exports = {productsCollection, database};