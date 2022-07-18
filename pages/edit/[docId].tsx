import React, { useEffect, useState } from 'react';
import { MongoClient ,ServerApiVersion } from "mongodb";
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next';
const DocId = (props:any) => {
    const Editor = dynamic(() => import('../../components/Editor'), { ssr: false })
    const [drawingsList,setDrawingList] = useState(JSON.parse(props.requiredDocument))
    const requiredDocument=drawingsList[0]
   
    

  return (
  <Editor  data = {requiredDocument.documentDetails.document}  title={requiredDocument.documentDetails.title} exist={true}  mongoId={requiredDocument._id} isReadOnly={false}   />  

  )
}

export default DocId


export const getServerSideProps: GetServerSideProps = async (context) => {


    const {params}:any = context;
    const id = params.docId;
    const uri = "mongodb+srv://shaham:NIf3noT9YYooT1xV@cluster0.ytrfw.mongodb.net/tlDraw?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {  serverApi: ServerApiVersion.v1 });
    const db = client.db();
    var documentDetails = await db.collection('drawings').find().toArray()
    
    
      var requiredDocument :any = documentDetails.filter((document) => {
              if(document._id ==id){
                return document
              }
      })
      requiredDocument = await JSON.stringify(requiredDocument)
    client.close()
    return {props:{requiredDocument}}
}