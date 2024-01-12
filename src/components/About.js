import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Please take a look around.</p>
            </div>
            <div>
              <p>Hi Everyone, I am Althaf Hussain from Andhra Pradesh, India.
I'm an experienced Front-End Engineer with 1+ years in creating dynamic and responsive user interfaces</p> 
<br />
<p>Proven expertise in translating design concepts into efficient and high-performance code. . Open to new challenges and opportunities for continuous learning and growth</p> 
<br />
<p>Apart from coding, some other activities that I love to do!</p>
<h3>&#x2022; Playing Cricket</h3>
<h3>&#x2022; Trekking</h3>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;