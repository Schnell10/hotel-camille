import React from 'react'
import './header.scss'
import blackLogo from '../../../assets/logo/logo-compact-black.svg'
import menuBurgerBlack from '../../../assets/image/menu-burger-black.svg'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'

const Header = () => {
   return (
      <div className="header">
         <header id="header">
            <nav>
               <img src={menuBurgerBlack} alt="Menu burger" />
            </nav>
            <h1>
               <img src={blackLogo} alt="Logo Hotel Camille" className="logo" />{' '}
            </h1>
            <Link to="/book">
               <Button>Réserver</Button>
            </Link>
         </header>
      </div>
   )
}

export default Header
