import React from 'react'

const Input = ({inputPlaceholder ,inputType}) => {
  return (
    <input className="w-60 h-14 p-3 font-roboto font-bold text-base border border-white rounded placeholder:uppercase placeholder:text-white text-white bg-light-white " type={inputType} placeholder={inputPlaceholder} />
    )
}

export default Input