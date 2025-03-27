import React from 'react'
import useStepPathAnimation from '../../animations/useStepPathAnimation';

const Section1 = () => {
  useStepPathAnimation(); // Hook to trigger animation
  
  return (
    <div className='section-container-1 flex bg-section-1 flex-col md:flex-row'>
      <div 
        data-aos="fade-up" 
        className='w-full md:w-1/2 h-full p-6 md:p-14 flex flex-col gap-2 justify-end items-start'
      >
        <h5 className='text-gray font-extralight text-sm md:text-base'>About Us</h5>
        <h1 className='font-semibold text-3xl md:text-5xl text-black'>Empowering</h1>
        <h1 className='font-bold text-3xl md:text-5xl text-orange'>Your Financial Future</h1>
        <p className='text-gray font-extralight text-sm md:text-base'>
          At Our Company, we are committed to providing ethical, research-driven financial solutions 
          that help you achieve your goals. With integrity at our core, we tailor our strategies 
          to meet your unique needs, ensuring long-term success and financial security.
        </p>
        <button className='buttonEffect mb-2 mt-4 md:mt-0'>
          Know More
        </button>
      </div>
      <div className='w-full md:w-1/2 h-full flex justify-end items-end'>
        <svg 
          className='bg-section-1-graph w-full h-auto' 
          id="mySvg" 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="auto" 
          viewBox="0 0 869 832" 
          fill="none"
        >
          <path 
            id="myPath" 
            d="M35.5 832V627.5H232V427H446.5V233H651.5V35H868.5" 
            stroke="#F47024" 
            strokeWidth="70"
          />
        </svg>
      </div>
    </div>
  )
}

export default Section1