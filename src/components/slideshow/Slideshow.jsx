import React, { useState } from 'react'
import './slideshow.scss'

const Slideshow = () => {
   const images = [
      'https://i.ibb.co/tZtN6tp/slideshow1.jpg',
      'https://i.ibb.co/FnVy2kH/slideshow2.jpg',
      'https://i.ibb.co/y6XLjP5/slideshow3.jpg',
   ]

   // État pour suivre l'index de l'image actuellement affichée
   const [currentIndex, setCurrentIndex] = useState(0)

   const handleClick = () => {
      // Incrémente l'index actuel pour afficher la prochaine image
      setCurrentIndex(currentIndex + 1)

      // Si on atteint la dernière image, retourne à la première
      if (currentIndex === images.length - 1) {
         setCurrentIndex(0)
      }
   }

   return (
      <div className="slideshow-container">
         {/*déplace le contenu à gauche ou à droite en fonction de la valeur de currentIndex, multipliée par la largeur de chaque slide (100%)*/}
         <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
            {/* Mapping à travers le tableau d'images */}
            {images.map((image, index) => (
               <div
                  key={index}
                  className={`slide ${index === currentIndex ? 'active' : ''}`}
               >
                  <img
                     src={image}
                     alt={`Slide ${index + 1}`}
                     loading="lazy"
                     onClick={handleClick}
                  />
               </div>
            ))}
         </div>
         <div className="three-lines">
            <div className={`line ${currentIndex === 0 ? 'active' : ''}`} />
            <div className={`line ${currentIndex === 1 ? 'active' : ''}`} />
            <div className={`line ${currentIndex === 2 ? 'active' : ''}`} />
         </div>
      </div>
   )
}

export default Slideshow
