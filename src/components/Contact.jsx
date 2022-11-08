import React from 'react'
import { contact } from '../constants'

const Contact = () => (
    <div class="w-full flex flex-col sm:flex-row mt-4 justify-between">
        {contact.map((contact, index) => 
            <div key={index} className='flex flex-col items-center justify-center text-center mt-10'>
                <div className="flex justify-center rounded-[50%] bg-dimGray h-[62px] w-[62px] items-center">
                    <div className='flex items-center rounded-[50%] h-screen w-[12px] h-[12px] bg-secondary'>
                    </div>
                </div>
                <div className="flex-col mt-4">
                    <h1 className='font-bold font-poppins text-white'>{contact.title}</h1>
                    <a href={contact.link} target="_blank" rel="noreferrer"><p className='font-normal font-poppins text-white'>{contact.desc}</p></a>
                </div>
            </div>
        )}
    </div>
)

export default Contact
