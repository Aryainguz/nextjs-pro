import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <> 
    <div className="flex justify-evenly m-6 text-blue-500">
      <Link href="/"> Home  </Link>
      <Link href="/about">  About </Link>
      <Link href="/users">  Users </Link>
    </div>

    </>

  )
}

export default Navbar