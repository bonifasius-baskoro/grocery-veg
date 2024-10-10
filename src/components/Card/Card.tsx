import Image from 'next/image'
import React, { FC } from 'react'

const Card:FC = () => {
  return (
    <div className='bg-[#F9F8F6] w-[167px] h-[242px] items-center px-3'>

        <div>

        <Image src="/products/cucumber.png" width="145" height="113" alt="garlic"/>
        </div>
        <h1 className='text-2xl'>$3.2</h1>
        <h2 className='text-xl font-light'> Cucumber</h2>

    </div>
  )
}

export default Card