import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <section id="nav">
    <nav className='flex items-center justify-between space-x-20 p-6 mx-auto container mt-10'>
        <div></div>
    <div className='flex items-center justify-between space-x-10 uppercase text-grayishBlue '>
<li className='hover:text-softRed list-none'><Link href="/create" >Create</Link></li>
<li className='hover:text-softRed list-none'><Link href="/edit" >Edit</Link></li>
<li className='hover:text-softRed list-none'><Link href="/readOnly" >Read your Files</Link></li>
    </div>
    </nav>
    </section>
  )
}
