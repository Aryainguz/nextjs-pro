import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const val = "Hello, World!"
  return (
    <>
      <div className="flex justify-evenly m-6 text-blue-500">
        <Link href="/"> Home  </Link>
        <Link href="/about">  About </Link>
        <Link href="/users">  Users </Link>
      </div>
      <h1 className='text-center'>Value is: {val}</h1>
    </>
  )
}
