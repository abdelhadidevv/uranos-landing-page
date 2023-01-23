import React from 'react'

const TeamItem = ({image,name,description}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={image} alt="" className='rounded-full w-32 h-32'/>
        <p className='font-roboto font-bold text-3xl text-black-text mt-10 text-center'>{name}</p>
        <p className='font-roboto font-light text-lg text-black-text mt-1 max-w-xs text-center'>{description}</p>
    </div>
  )
}

export default TeamItem