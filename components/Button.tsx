import React from 'react'

const Button = ({children}: {children: any}) => {
  return (
    <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition duration-300">{children}</button>
  )
}

export default Button