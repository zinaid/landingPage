import React from 'react'
import { skills } from '../constants'

const Skills = () => (
    <div className='mt-16'>
    <div className='w-full flex flex-col justify-center items-center mt-20'> 
       <h1 className={`custom-heading font-poppins`}>
            My Skills
        </h1>
    </div>
    <div className='bg-dimGray w-full mt-20 flex lg:flex-row flex-col justify-between'>
      {skills.map((skills, index)=>
         <div className='w-full flex flex-col justify-center items-center mt-[59px] mb-[57px]'>
          <h1 className='font-poppins text-normal text-[62px] text-[#4F4F4F] hover:text-white hover:text-[72px] cursor-pointer'>{skills.desc}</h1>
          {/* <p className='text-secondary font-poppins text-[24px]'>{skills.title}</p> */}
          <img src={skills.title} alt="skills.desc"/>
       </div>
      )}
    </div>
    </div>
)

export default Skills
