import Image from 'next/image'
import React from 'react'

function Option({title,subTitle,img}) {
  return (
    <div className='flex items-center  space-x-4 space-x-reverse bg-primary/5 p-3 rounded-md hover:bg-blue-100 hover:text-white group transition-all'>
        <div>
            <Image src={img} width={100} height={100} alt={subTitle} className='w-12 '/>
        </div>
        <div className='flex flex-col items-start justify-start space-y-2'>
            <h3 className='font-bold group-hover:text-black transition-all'>{title}</h3>
            <span className='text-gray-500 font-thin group-hover:text-black transition-all'>{subTitle}</span>
        </div>
    </div>
  )
}

export default Option