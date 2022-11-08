import React from 'react'
import { services } from '../constants'

const Service = () => (
    <div id="services" className='w-full flex flex-col justify-center items-center mt-20'> 
       <h1 className={`custom-heading font-poppins`}>
            Services
        </h1>
        <div className='w-full bg-primary flex lg:flex-row flex-col justify-between mt-8'>
            {services.map((service, index)=>
                <div key={index} className={`py-10 lg:mt-0 mt-10 bg-dimGray w-full ${index !== services.length-1 ? 'md:mr-[60px] mr-[60px]' : 'mr-[0px]'} flex flex-col justify-center items-start px-10 hover:border-b-2 hover:border-secondary active:border-b-2 cursor-pointer`}>
                    <img 
                    src={service.icon}
                    alt={service.title}
                    />
                    <p className='font-poppins font-normal text-[36px] text-[#535353] mt-4'>{service.title}</p>
                </div>
            )}
        </div>
    </div>
)

export default Service