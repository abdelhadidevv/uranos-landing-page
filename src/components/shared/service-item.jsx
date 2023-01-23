import React from 'react'

const ServicesItem = ({icon,title,description}) => {
  return (
    <div className='flex flex-col max-w-[350px] gap-4'>
        <div className="flex flex-row gap-8">
            <img src={icon} alt="title" className="w-12 h-12" />
            <h3 className='font-roboto font-light text-2xl lg:text-4xl text-white'>{title}</h3>
        </div>
        <p className="font-roboto font-light text-base text-light-gray">{description}</p>
    </div>
  )
}

export default ServicesItem