import React from 'react'
import logoFooter from '../../../assets/logo/logo-footer.svg'
import './footer.scss'

const Footer = () => {
   return (
      <div className="footer">
         <footer>
            <img src={logoFooter} alt="Logo Hotel Camille" />
         </footer>
      </div>
   )
}

export default Footer
