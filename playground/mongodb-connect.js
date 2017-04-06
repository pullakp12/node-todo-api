/**
 * Created by Pullak on 06-04-2017.
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/appTest',(err,db)=>{
    if(err){
        return console.log("Unable to connect to mongoDb");

    }
    console.log("Connected to MonogDb");
    /*db.collection("Appone").insertOne({
        name :"pullak",
        value:false
    },(err,result)=>{
       if(err){
           return console.log("Unable to insert the value in to the record");
       }
       console.log(JSON.stringify(result.ops,undefined,2));
    });*/
    db.collection("users").insertOne({
        name:"pullak",
        age:26,
        location :"pandav Nagar , Delhi"
    },(err,result)=>{
        if(err){
            return console.log("Unable to insert the value in to the record");
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
});