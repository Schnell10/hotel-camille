import React from 'react'
import { useLocation } from 'react-router-dom'
import './header.scss'
import blackLogo from '../../../assets/logo/logo-compact-black.svg'
import menuBurgerBlack from '../../../assets/image/menu-burger-black.svg'
import whiteLogo from '../../../assets/logo/logo-compact-white.svg'
import menuBurgerWhite from '../../../assets/image/menu-burger-white.svg'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'

const Header = () => {
   const location = useLocation()

   return (
      <header className="header">
         <div className="header-fixed">
            <nav>
               <img src={menuBurgerBlack} alt="Menu burger" />
            </nav>
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
               <nav>
                  <img src={menuBurgerWhite} alt="Menu burger" />
               </nav>
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
      </header>
   )
}

export default Header
