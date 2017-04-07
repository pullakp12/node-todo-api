/**
 * Created by Pullak on 07-04-2017.
 */
var {MongoClient ,ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost/appTest", (err,db)=>{
    if(err)
        console.log("unable to connect to mongoDB");
    console.log("connected to mongoDb");
    /*db.collection('Appone').deleteMany({name:'hello world'}).then((res)=>{
        console.log(res);
    })*/
    /*db.collection('Appone').deleteOne({name:'hello world'}).then((res)=>{
        console.log(res);
    });
    */db.collection('Appone').findOneAndDelete({name:'kushboo'}).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    });
})