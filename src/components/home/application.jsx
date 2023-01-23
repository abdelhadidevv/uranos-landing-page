import React from 'react'
import laptop from '../../images/laptop.png'

const Application = () => {
    return (
       <div className="w-full relative">
        <img className='absolute -top-2 w-[1200px] -right-48 h-[750px] hidden 2xl:inline-block' src={laptop} alt=""/>
         <div className='flex flex-col'>
            <div className="w-full  2xl:h-64 bg-light-yellow flex flex-col py-9 2xl:py-0 px-4 2xl:px-14  justify-center items-center 2xl:items-start">
                <h3 className='font-roboto font-bold text-3xl text-black-text z-10 text-center 2xl:text-start'>This is awsome APP</h3>
                <p className='max-w-lg mt-3 font-roboto font-light text-base text-black-text z-10 text-center 2xl:text-start'>Nam accumsan nunc sit amet elementum sollicitudin. Integer vel lacus eget tortor lobortis tincidunt sed eu dolor. Phasellus cursus augue ac pulvinar cursus.</p>
            </div>
            <div className="w-full 2xl:h-[600px] bg-white flex flex-col pb-9 2xl:pb-0 px-4 2xl:px-14 pt-16 items-center 2xl:items-start">
                <h3 className='font-roboto font-bold text-3xl text-black-text z-10 text-center 2xl:text-start'>This is awsome APP</h3>
                <p className='max-w-lg mt-3 font-roboto font-light text-base text-black-text z-10 text-center 2xl:text-start'>Nam accumsan nunc sit amet elementum sollicitudin. Integer vel lacus eget tortor lobortis tincidunt sed eu dolor. Phasellus cursus augue ac pulvinar cursus.
                    <br />
                    <br />
                    Quisque ut erat ornare, feugiat turpis a, fringilla felis. Nulla molestie lorem et orci sagittis, et accumsan ex porta.
                </p>
                <button className="w-max h-16 px-7 mt-14 z-10 uppercase text-center bg-black-text text-white rounded font-roboto font-bold text-lg">DOWNLOAD NOW</button>
            </div>
        </div>
       </div>
    )
}

export default Application