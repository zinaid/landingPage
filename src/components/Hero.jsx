import React from 'react'
import styles from '../style'
import {banner, resume} from '../assets'
import Button from './Button'


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[100vh]`}>
        <div className={`flex md:flex-row flex-col justify-between items-center  xl:px-0 sm:px-16 w-full px-6`}>
            <div className='flex flex-col'>
                <h1 className={`custom-heading font-poppins`}>
                    Hi, I am <br className='sm:block hidden' /><span className='hover:text-secondary'>Zinaid Kapić</span>.
                </h1>
                <p className={`font-poppins text-[#828282] ${styles.paragraph}`}>Software Developer</p>
                <div className='mt-10 flex flex-row'>
                <a href={resume} download="resume">
                    <Button download text="Download CV" design="bg-secondary mr-4 border-secondary border-2 hover:bg-primary"/>
                </a>
                <a href="#about">
                    <Button text="Learn More" design="border-white border-2 hover:bg-secondary"/>
                </a>
                </div>
            </div>
            <div class="md:mt-0 mt-10 border-2 rounded-[50%] border-[#1e1d1d33] ">
                <div className='flex flex-col custom-border relative z-[0]'> 
                    <img src={banner} alt="banner" className='rounded-[50%] z-[5] '/>
                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default Hero
