import React from 'react'
import { Link } from 'react-router-dom'
import './leftMenu.scss'

const LeftMenu = ({ isOpen, toggleMenu }) => {
   const handleOverlayClick = () => {
      toggleMenu() // Ferme le menu
   }

   return (
      <div
         className={`left-menu ${isOpen ? 'open' : ''}`}
         onClick={handleOverlayClick}
      >
         <nav>
            <ul>
               <li>
                  <Link to="/book">Réserver</Link>
               </li>
               <li>
                  <Link to="/rooms">Les chambres</Link>
               </li>
               <li>
                  <Link to="/restaurant">Les restaurants</Link>
               </li>
               <li>
                  <Link to="/gallery">La galerie</Link>
               </li>
               <li>
                  <Link to="/offers">Nos offres du moment</Link>
               </li>
            </ul>
         </nav>
         <div className="overlay" />
      </div>
   )
}

export default LeftMenu
