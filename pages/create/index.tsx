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
      
            <div className='flex flex-col p-6 m-3 h-1/4 bg-white space-y-10 rounded-2xl '>
               
  <form onSubmit={handleSubmit} className="flex flex-col space-y-10  p-6 m-3">
    <div>
  <label htmlFor="title" className="block mb-2 text-sm font-medium text-black ">Enter Your Slate Title</label>
      <input type="text" required  ref={titleRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
      </div>
<button className='bg-red-500 rounded-md w-fit p-3 px-5 text-sm hover:bg-black hover:text-red-500 duration-150'  >Submit</button>
</form>

</div>
   </div>
   </div>
   </section>
    )
   
 }


}

export default Index