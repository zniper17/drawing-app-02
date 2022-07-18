
import { MongoClient ,ServerApiVersion } from "mongodb";
import {ObjectId} from 'mongodb'

async function handler(req:any,res:any){
    const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.ytrfw.mongodb.net/tlDraw?retryWrites=true&w=majority`
    const client = new MongoClient(uri, {   serverApi: ServerApiVersion.v1 });
    if(req.method == 'POST'){

        var newDocument = req.body.newDocument;
        var title = req.body.title;
        var documentToSend = {
            title:title,
            document:newDocument
        }
  
        const db = client.db()
        await  db.collection('drawings').insertOne({documentDetails:documentToSend})
       
        client.close();
        res.status(201).json({message:'Signed Up!'})
    }

    if(req.method == 'GET'){
        const db = client.db();
        const allDocuments = await db.collection('drawings').find().toArray();
       
        
        res.status(200).json({comment:allDocuments}) 
        client.close();
    }
    if(req.method == 'PATCH'){

       var  NewmongoId = new ObjectId(req.body.mongoId)
     
        const updatedDocument =req.body.newDocument
        var title = req.body.title;
        var documentToSend = {
            title:title,
            document:updatedDocument
        }
        
    
                const db = client.db();
      const collection =await db.collection('drawings')
       var update = collection.updateOne({
        _id:NewmongoId
       },{
        $set:{
            documentDetails:documentToSend

        }
       },function(error,result) {
        console.log(result);
        
       })
        client.close();
        res.status(202).json({message:'Updated'})
    }
    
}

export default handler


export async function getAllDocuments(){

    const url =`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.ytrfw.mongodb.net/tlDraw?retryWrites=true&w=majority`
    const client = new MongoClient(url, {  serverApi: ServerApiVersion.v1 });
    const db = client.db();
    var allDocuments = await db.collection('drawings').find().toArray()
client.close();
return allDocuments

}