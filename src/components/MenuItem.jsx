import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, adress, Icon}) {
  return (
    <Link href={adress} className='hover:text-red-600'>
        <Icon className='text-2xl sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
