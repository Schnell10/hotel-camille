import React from 'react'
import './button.scss'

const Button = ({ children }) => {
   return (
      <div className="button">
         <button>{children}</button>
      </div>
   )
}

export default Button
