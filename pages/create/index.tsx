import React, { useEffect, useRef, useState } from 'react'

 
  import  { useRouter } from 'next/router';
import { Nav } from '../../components/Nav';

const Index = () => {
     const [formStatus,setFormStatus] = useState<boolean>(false);
     const titleRef= useRef<HTMLInputElement>(null);
     const [title,setTitle] = useState<any>("")
     const router = useRouter()
  function handleSubmit(e: React.SyntheticEvent){
    e.preventDefault();
  var givenTitle  = titleRef.current?.value
 
    setTitle( givenTitle  );
    // setFormStatus(true);
     router.push(`create/${givenTitle}`)
}
    

 if(!formStatus){
    return(
     <section>
     <Nav />
     <div>
        <div className='flex justify-center items-center h-screen bg-blue-50'>
      
        <div className="w-full max-w-xs">
               
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div className='mb-4'>
    
  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 ">Enter Your Slate Title</label>
      <input type="text" required  ref={titleRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"  />
      </div>
<button className='bg-red-500 rounded-md w-fit p-3 px-5 text-sm hover:bg-black hover:text-red-500 duration-150'>Submit</button>
</form>

</div>
   </div>
   </div>
   </section>
    )
   
 }


}

export default Index