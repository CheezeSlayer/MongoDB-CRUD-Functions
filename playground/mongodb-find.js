//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");//identical function to above code

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
  if(err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");
  const db = client.db('TodoApp')

/*
  db.collection("Todos").find({
    _id: new ObjectID("5c6a1ca9bdc167354e30a9bc")
  }).toArray().then((docs)=> {
    console.log("Todos");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch tools", err);
  });
*/
/*
  db.collection("Todos").find().count().then((count)=> {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log("Unable to fetch tools", err);
  });
*/
  db.collection("Users").find({name: "Henry"}).count().then((count)=> {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log("Unable to fetch tools", err);
  });

  db.collection("Users").find({
    name: "Henry"
  }).toArray().then((docs)=> {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch tools", err);
  });
  client.close();
}); //the url where your database lives
