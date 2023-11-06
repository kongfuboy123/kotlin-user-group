import React from 'react'
import Image from 'next/image'
import Icon from '@/public/icon.png'
export default function Navbar() {
  return (
    <div className='flex min-w-full bg-blue-400'>
      <Image src={Icon} width={50} height={50} />
     <h1 className='text-white text-4xl'>WSU Kotlin User Group</h1> 
    </div>
  )
}
