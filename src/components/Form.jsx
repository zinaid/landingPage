import React from 'react'
import Button from './Button'

const Form = () => (
    <div id="contact" className='w-full flex flex-col justify-center items-center mt-20'> 
    <h1 className={`custom-heading font-poppins text-center`}>
         Get in touch
     </h1>
     <div className='w-full bg-primary flex flex-row justify-between mt-8 max-w-[750px]'>
        <form className='flex justify-center items-center w-full flex-col'>
            <div className='flex justify-center items-center w-full mt-10'>
                <input className='border-b-2 border-[#4F4F4F] bg-primary text-white placeholder-[#4F4F4F]  mr-10 w-[50%] p-2 focus:border-none' placeholder='Name'></input>
                <input className='border-b-2 border-[#4F4F4F] bg-primary text-white w-[50%] placeholder-[#4F4F4F]  p-2 focus:border-none' placeholder='Last name'></input>
            </div>

            <div className='flex justify-center items-center w-full mt-16'>
                <input className='border-b-2 border-[#4F4F4F] bg-primary text-white mr-10 w-[50%] placeholder-[#4F4F4F]  p-2 focus:border-none' placeholder='Email'></input>
                <input className='border-b-2 border-[#4F4F4F] bg-primary text-white w-[50%] p-2 placeholder-[#4F4F4F]  focus:border-none' placeholder='Phone number'></input>
            </div>

            <div className='flex justify-center items-center w-full mt-16'>
                <textarea className='border-2 border-[#4F4F4F] bg-primary text-white w-[100%] placeholder-[#4F4F4F]  p-2 h-[256px] focus:border-none' placeholder='Message'></textarea>
            </div>

            <Button text="Submit now" design="bg-secondary border-secondary border-2 mt-10 hover:bg-primary"/>

        </form>
     </div>
 </div>
)

export default Form
