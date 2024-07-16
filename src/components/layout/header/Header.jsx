import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './header.scss'
import blackLogo from '../../../assets/logo/logo-compact-black.svg'
import menuBurgerBlack from '../../../assets/image/menu-burger-black.svg'
import whiteLogo from '../../../assets/logo/logo-compact-white.svg'
import menuBurgerWhite from '../../../assets/image/menu-burger-white.svg'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import LeftMenu from './leftMenu/LeftMenu'

const Header = () => {
   const location = useLocation() //Hook pour voir sur quel page on se trouve
   const [isMenuOpen, setIsMenuOpen] = useState(false) // État pour le menu ouvert
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen) // Inverse l'état du menu
   }

   return (
      <header className="header">
         <div className="header-fixed">
            <div className="first-burger-menu">
               <img
                  src={menuBurgerBlack}
                  alt="Menu burger"
                  onClick={toggleMenu}
               />
            </div>
            <Link to="/">
               <h1>
                  <img
                     src={blackLogo}
                     alt="Logo Hotel Camille"
                     className="logo"
                  />{' '}
               </h1>
            </Link>
            <Link to="/book">
               <Button>Réserver</Button>
            </Link>
         </div>
         {location.pathname === '/' && (
            <div className="header-overlay">
               <div className="second-burger-menu" onClick={toggleMenu}>
                  <img src={menuBurgerWhite} alt="Menu burger" />
               </div>
               <Link to="/">
                  <h1>
                     <img
                        src={whiteLogo}
                        alt="Logo Hotel Camille"
                        className="logo"
                     />{' '}
                  </h1>
               </Link>
            </div>
         )}
         <LeftMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
   )
}

export default Header
