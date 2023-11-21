import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex justify-evenly m-6 text-blue-500">
        <Link href="/"> Home  </Link>
        <Link href="/about">  About </Link>

      </div>
    </>
  )
}
