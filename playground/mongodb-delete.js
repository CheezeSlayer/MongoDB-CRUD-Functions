//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");//identical function to above code

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
  if(err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");
  const db = client.db('TodoApp')

  //deleteMany
/*
  db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
    console.log(result);
  });
*/
  //deleteOne
/*
  db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    console.log(result);
  });
*/
/*
  db.collection("Todos").findOneAndDelete({compeleted: false}).then((result) => {
    console.log(result);
  });
*/
/*
  db.collection("Users").deleteMany({name: "Henry"}).then((result) => {
    console.log(result);
  });
*/

  db.collection("Users").findOneAndDelete({
    _id: new ObjectID("5c678ed57553343080ca38db")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close();
}); //the url where your database lives
