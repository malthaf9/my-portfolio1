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
              <p>Hi. I'm Althaf, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>"A frontend developer with 1.3 years of experience in crafting intuitive and engaging user interfaces. While my journey began in frontend development, I'm fueled by a growing passion for full-stack development. My goal is to create seamless and dynamic web applications. With a strong foundation in frontend technologies and an eagerness to expand my skill set, I'm excited to embark on this journey to become a versatile full-stack developer. Let's collaborate and build the web of tomorrow together!"</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;