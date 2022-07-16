
import Link from "next/link"
const success = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
        <div className="relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                <div className="text-green-500">
                <svg className="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="text-sm font-medium ml-3">Success</div>
            </div>
			<div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Your Slate has been Added</div>
            
        </div>
        <div className="text-center mt-10 flex flex-col space-y-5 ">
            <h1 className="text-softRed hover:cursor-pointer"><Link href="/create">Click here to add more to your collection</Link></h1>
            <h1 className="text-softRed hover:cursor-pointer"><Link href="/">Go back to home</Link></h1>
        </div>
    </div>
  )
}

export default success