import {
    ColorStyle,
    DashStyle,
    SizeStyle,
    Tldraw,
    TDDocument,
    TDShapeType,
    TldrawApp
  } from "@tldraw/tldraw";
  import dynamic from 'next/dynamic'
  import { GetServerSideProps } from "next";

const title = (props:any) => {
    const Editor = dynamic(() => import('../../components/Editor'), { ssr: false })
  var title = props.title
     return (
    <div>
        <Editor    title={title} exist={false} isReadOnly={false} />
    

    </div>
  )
}

export default title





export const getServerSideProps: GetServerSideProps = async (context) => {

const {params}:any = context;
const title = params.title;
    
     return {
        props:{
            title:title
        }
     }
   
}
