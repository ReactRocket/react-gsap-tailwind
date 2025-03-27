import React, { useEffect } from 'react'
import useStepPathAnimation from '../../animations/useStepPathAnimation';
import useGsapAnimations from '../../hooks/useGsapAnimations';
const Section1 = () => {
  useStepPathAnimation(); // Hook to trigger animation
  const {elementRef,slide} = useGsapAnimations()

  useEffect(() => {
    slide("bottom","in",0.5,2)
  }, [])
  

  return (
    <div className=' section-container-1 flex bg-section-1' >
        <div ref={elementRef} className='w-full h-full p-14 flex flex-col gap-2 justify-end items-start'>
            <h5  className='text-gray font-extralight'>About Us</h5>
            <h1  className='font-semibold text-5xl text-black'>Empowering</h1>
            <h1  className='font-bold text-5xl text-orange'>Your Financial Future</h1>
            <p  className='text-gray font-extralight'>At Our Company, we are committed to providing ethical, research-driven financial solutions that help you achieve your goals. With integrity at our core, we tailor our strategies to meet your unique needs, ensuring long-term success and financial security.</p>
            <button  className='buttonEffect mb-2'>
                Know More
            </button>
        </div>
        <div className='w-full h-full flex justify-end items-end'>
          <svg className='bg-section-1-graph' id="mySvg" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 869 832" fill="none" clasName="mt-4"><path id="myPath" d="M35.5 832V627.5H232V427H446.5V233H651.5V35H868.5" stroke="#F47024" strokeWidth="70" ></path></svg>
        </div>
    </div>
  )
}

export default Section1