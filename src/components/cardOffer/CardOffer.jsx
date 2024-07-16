import React from 'react'

import './cardOffer.scss'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const CardOffer = ({ className, title, image }) => {
   return (
      <div className={className}>
         <div className="card-offer-text">
            {title}
            <p>
               Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci
               porta dapibus.
               <span>
                  {' '}
                  Lorem ipsum dolor sit amet.Nulla porttitor accumsan tincidunt.
                  Pellentesque in ipsum id.
               </span>
            </p>
            <p className="price">A PARTIR DE 125 EUR</p>
            <Link to="/offers">
               <Button>EN SAVOIR PLUS</Button>
            </Link>
         </div>
         <div className="card-offer-image">{image}</div>
      </div>
   )
}

export default CardOffer
