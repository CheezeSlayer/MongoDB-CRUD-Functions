//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");//identical function to above code

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
  if(err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");
  const db = client.db('TodoApp')
/*
  db.collection("Todos").findOneAndUpdate({_id: new ObjectID("5c6a2ed4bdc167354e30ac49")
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
*/

  db.collection("Users").findOneAndUpdate({_id: new ObjectID("5c6a2ed4bdc167354e30ac20")
    },  {
      $set: {
        name: "Henry"
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  client.close();
}); //the url where your database lives
