import React, { useEffect, useState } from 'react'

import { MongoClient ,ServerApiVersion } from "mongodb";
import Link from 'next/link';
import { Nav } from '../../components/Nav';
import { TDDocument } from '@tldraw/tldraw';
import { GetServerSideProps } from 'next';
interface IDocument {
    title:string;
    document:TDDocument

  }

  interface IMongoDocument{
    _id:string;
    documentDetails:IDocument
  }
 
const Read = (props:any) => {
    const [drawingsList,setDrawingList] = useState<IMongoDocument[]>(JSON.parse(props.sendDocuments))
 

   
return (
    <section>
        <Nav />
     <div className='max-w-6xl mx-auto my-auto mt-20 py-10'>
       <div>
       <h1 className='text-3xl py-10 text-softRed uppercase'>You can read your Slates from here</h1>
       </div>
       <div className="w-1/3 bg-softBlue rounded-lg shadow">
       <ul className="divide-y-2 divide-gray-100">
     {
        drawingsList.map((drawing) => {
            return (
                <li key={drawing._id} className="text-center py-5 tracking-widest" ><Link href={`./readOnly/${drawing._id}`}>{drawing.documentDetails.title}</Link></li>
            )
        })
     }
 </ul>
     </div>

    </div>
    </section>
  )
}

export default Read




export const getServerSideProps: GetServerSideProps = async (context) => {
    const url =`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.ytrfw.mongodb.net/tlDraw?retryWrites=true&w=majority`
    const client = new MongoClient(url, {  serverApi: ServerApiVersion.v1 });
    const db = client.db();
    var allDocuments = await db.collection('drawings').find().toArray();
     var sendDocuments = await JSON.stringify(allDocuments)
    
    client.close()

    return {props:{sendDocuments}}

    
}