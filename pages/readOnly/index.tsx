import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { MongoClient ,ServerApiVersion } from "mongodb";
import Link from 'next/link';
import { Nav } from '../../components/Nav';
import { TDDocument } from '@tldraw/tldraw';
import { GetServerSideProps } from 'next';
import {getAllDocuments} from "../api/documents/documents";
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
  <Head>
     <title>A Free Drawing Platform</title>
     <meta name="description" content="Created by Shaham" />
     <link rel="icon" href="/favicon.ico" />
   </Head>
  <Nav />
 <div className='max-w-6xl mx-auto my-auto mt-10 py-10'>
   
   <div className="flex justify-left flex-col space-y-5 ">
     <h1  className='text-3xl'>Read Your Files here</h1>
  
   <ul className='flex flex-col ' >
  {
     drawingsList.map((drawing) => {
         return (
             <li  key={drawing._id}  className='px-6 py-2 text-2xl text-softBlue hover:text-softRed  rounded-t-lg' ><Link href={`./readOnly/${drawing._id}`}   >{drawing.documentDetails.title}</Link></li>
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
  var allDocuments = await getAllDocuments()
     var sendDocuments = await JSON.stringify(allDocuments)
           return {props:{sendDocuments}}

    
}