/**
 * Created by Pullak on 07-04-2017.
 */
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost/appTest", (err, db)=>{
   if(err)
       return console.log("Unable to connect to MonogDb");
   console.log("connected to mongoDb");
   /*db.collection('Appone').findOneAndUpdate(
       {_id : new ObjectID('58e5bd3dc8d21b048c71dfd8')},
       {$set :{value:true}},
       {returnOriginal:false}
   ).then((res)=>{
       console.log(res);
   });*/
   db.collection('users').findOneAndUpdate(
       {_id : new ObjectID('58e5be2750be891ff8cfc794')},
       {$inc :{age:1}},
       {returnOriginal:false}
   ).then((res)=>{
       console.log(res);
   });
});
