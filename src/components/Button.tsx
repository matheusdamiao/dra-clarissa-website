import React, { ReactElement, ReactNode } from 'react';

interface BtnProps {
    textColor: string;
    bgColor: string;
    children?: ReactNode
    size?: string;
    margin?: string;
}

const Button = ({textColor, bgColor, children, size, margin}: BtnProps) => {
  return (
    <div className={`${textColor} ${bgColor} ${margin} rounded-lg z-[9999999] ${size ? size : 'max-w-[250px]'}  text-center px-6 py-4 font-bold hover:cursor-pointer`}>
      {children}
    </div>
  )
}
 
export default Button
