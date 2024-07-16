import React from 'react'
import { Link } from 'react-router-dom'
import './pageUnderConstruction.scss'
import Spinner from '../spinner/Spinner'

const PageUnderConstruction = () => {
   return (
      <div className="page-under-construction">
         <h2>Page en cours de construction</h2>
         <Spinner />
         <p>
            La page que vous demandez est en cours de construction.
            <span> Revenez nous voir bientôt !</span>
         </p>
         <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
   )
}

export default PageUnderConstruction
