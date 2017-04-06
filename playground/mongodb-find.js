var {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost/appTest',(err,db)=>{
    if(err)
        return console.log("Unable to connect to MongoDB");
    console.log("connected to the server");
    db.collection('Appone').find({_id:new ObjectID('58e5cb6ab3cd1cf175a9995a')}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log("Unable to retrieve the records");
    })
});


