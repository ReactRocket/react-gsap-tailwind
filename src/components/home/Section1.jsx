import React from 'react'

const Section1 = () => {
  return (
    <div className='section-container flex bg-section-1' >
        <div className='w-full h-full p-14 flex flex-col gap-2 justify-end items-start'>
            <h5 className='text-gray font-extralight'>About Us</h5>
            <h1 className='font-semibold text-5xl text-black'>Empowering</h1>
            <h1 className='font-bold text-5xl text-orange'>Your Financial Future</h1>
            <p className='text-gray font-extralight'>At Our Company, we are committed to providing ethical, research-driven financial solutions that help you achieve your goals. With integrity at our core, we tailor our strategies to meet your unique needs, ensuring long-term success and financial security.</p>
            <button className='buttonEffect mb-2'>
                Know More
            </button>
        </div>
        <div className='w-full h-full flex justify-end items-end'>
          <div className="bg-section-1-graph"></div>
        </div>
    </div>
  )
}

export default Section1