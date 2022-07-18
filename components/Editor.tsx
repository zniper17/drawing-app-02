import * as React from "react";
import { Tldraw, TldrawApp } from "@tldraw/tldraw";
import { useRouter } from 'next/router'

export default function App(props:any) {
  const rTLDrawApp = React.useRef<TldrawApp>();
const title = props.title
  const document = props.data;
  const mongoId = props.mongoId;
  const exist =props.exist
  const isReadOnly = props.isReadOnly
  const [firstDocument,setNewDocument]=React.useState(document)
  const router = useRouter()

  const id = new Date().toISOString(); // [1]

  const handleMount = React.useCallback((app: TldrawApp) => {
    rTLDrawApp.current = app; // [2]

 
  }, []);
 function handleClick(){
    var newDocument =  rTLDrawApp.current?.document;

  
 
     
    var reqBody ={}
    if(exist){
       
         reqBody = {
            mongoId:mongoId,
          title:title,
          newDocument:newDocument
        }
        fetch('/api/documents/documents',{
            method:"PATCH",
            body:JSON.stringify(reqBody),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response) => response.json()).then((data) => console.log(data))
    }

   else{
     reqBody ={
        title:title,
        newDocument:newDocument
    }
    fetch('/api/documents/documents',{
        method:'POST',
        body:JSON.stringify(reqBody),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response) => response.json()).then((data) => console.log(data))
    router.push('/success')
     
 }
router.replace('/success')
}
  

  return (
    <div
    style={{
        position: "fixed",
        top: 30,
        left: 0,
        width: "100vw",
        height: "95vh"
      }}
      >
        <div>
   { isReadOnly==false && <button onClick={handleClick} className = "bg-softRed ml-5 rounded-md px-4  ">Save your document</button>}


       
      <Tldraw  onMount={handleMount} id={id} autofocus  disableAssets showPages={false}  document={firstDocument} readOnly={isReadOnly} showMenu={false} />
      </div>
    </div>
   
  );
}