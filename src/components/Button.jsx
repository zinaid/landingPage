import React from 'react'

const Button = ({text, design}) => (
    <div>
      <button className={`${design} py-[12px] px-[27px] text-normal text-white font-normal cursor-pointer`}>{text}</button>
    </div>
)

export default Button
