const Section2 = () => {
  return (
    <div className='section-container flex flex-col md:flex-row p-6 md:p-14'>
      <div 
        data-aos="fade-right" 
        className='h-full w-full md:w-1/3 mb-6 md:mb-0'
      >
        <h5 className='text-gray font-extralight text-sm md:text-base'>Overview</h5>
        <h1 className='font-semibold text-xl md:text-2xl text-black'>Our Financial</h1>
        <h1 className='font-bold text-xl md:text-2xl text-orange'>Growth Approach.</h1>
      </div>
      <div 
        data-aos="fade-left" 
        className='h-full w-full md:w-2/3 flex justify-end items-end'
      >
        <p className='text-gray font-normal text-base md:text-2xl leading-8 md:leading-10 tracking-wide text-justify'>
          At Our Company, we believe in delivering <b>financial solutions driven by in-depth research</b> and <b> unwavering integrity. Our client-first philosophy</b> ensures that every strategy is tailored to meet <b>individual financial goals</b>, fostering long-term success and security. We combine <b>cutting-edge market analytics</b> with <b>personalized insights</b> to develop investment plans that are both dynamic and resilient. Our approach integrates <b>risk assessment, wealth optimization, and growth-driven methodologies</b>, ensuring that our clients benefit from strategies designed for <b>sustainable financial advancement</b>.
        </p>
      </div>
    </div>
  )
}

export default Section2