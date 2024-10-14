import Image from 'next/image';
import React, { FC } from 'react'

interface circleCartPictProps{
    imageUrl:string;
}
const CircleCartPict:FC<circleCartPictProps> = ({imageUrl}) => {
  return (
    <div className='bg-white rounded-full '>
        <Image src={imageUrl} 	style={{objectFit: "cover"}} width="32" height="32" alt="cart"/>
    </div>
  )
}

export default CircleCartPict