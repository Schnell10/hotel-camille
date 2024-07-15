import React from 'react'
import CardOffer from '../cardOffer/CardOffer'

import './sectionOffers.scss'

const SectionOffers = () => {
   return (
      <div className="section-offers">
         <div className="title-separator">
            <h3>NOS OFFRES DU MOMENT</h3>
            <div className="separator" />
         </div>
         <div className="cards">
            <CardOffer
               title={
                  <h4>
                     SAINT<span>VALENTIN</span>
                  </h4>
               }
               image={
                  <img
                     src="https://i.ibb.co/y42N5LG/offre1.jpg"
                     alt="chambre d'hôtel avec lit a rotin"
                     loading="lazy"
                  />
               }
            />
            <CardOffer
               title={
                  <h4>
                     UN REPAS<span>OFFERT</span>
                  </h4>
               }
               image={
                  <img
                     src="https://i.ibb.co/26JCxDD/video.jpg"
                     alt="video"
                     loading="lazy"
                  />
               }
            />
         </div>
      </div>
   )
}

export default SectionOffers
