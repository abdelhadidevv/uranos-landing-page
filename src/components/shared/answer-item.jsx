import React from 'react'

const AnswerItem = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col max-w-[350px] gap-4 justify-center items-center'>
      <img src={icon} alt="title" className="w-20 h-20" />
      <h3 className='font-roboto font-light text-2xl lg:text-4xl text-white text-center mt-10'>{title}</h3>
      <p className="font-roboto font-light text-base text-light-gray text-center">{description}</p>
    </div>
  )
}

export default AnswerItem