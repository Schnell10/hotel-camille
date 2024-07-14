import React from 'react'
import './sectionPresentation.scss'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const SectionPresentation = () => {
   return (
      <div className="presentation">
         <div className="banner">
            <img
               src="https://i.ibb.co/Wz4gmFt/header.jpg"
               alt="Intérieur d'une chambre de l'hôtel"
               border="0"
            />

            <div className="text-header">
               <h2>
                  UN COCON <span>DANS LA VILLE</span>
               </h2>
               <div className="text-button">
                  <p>
                     Nulla porttitor accumsan tincidunt. Pellentesque in ipsum
                     id orci porta dapibus. Lorem ipsum dolor sit amet.Nulla
                     porttitor accumsan tincidunt. Pellentesque in ipsum id orci
                     porta dapibus. Lorem ipsum dolor sit amet.
                  </p>
                  <Link to="/book">
                     <Button>Réserver</Button>
                  </Link>
               </div>
            </div>
         </div>
         <div className="timeless-place">
            <div className="text-presentation-container">
               <div className="text-presentation">
                  <h3>
                     UN LIEU <span>HORS DU TEMPS</span>
                  </h3>
                  <div className="separator" />
                  <p>
                     Nulla porttitor accumsan tincidunt. Pellentesque in ipsum
                     id orci porta dapibus. Lorem ipsum dolor sit amet.Nulla
                     porttitor accumsan tincidunt. Pellentesque in ipsum id orci
                     porta dapibus. Lorem ipsum dolor sit amet. Nulla porttitor
                     accumsan tincidunt. Pellentesque in ipsum id orci porta
                     dapibus. Lorem ipsum dolor sit amet.Nulla porttitor
                     accumsan tincidunt. Pellentesque in ipsum id orci porta
                     dapibus. Lorem ipsum dolor sit amet.
                  </p>
                  <Link to="rooms">
                     <Button>VOIR LES CHAMBRES</Button>
                  </Link>
               </div>
            </div>
            <img
               src="https://i.ibb.co/ccVbxrw/header-vertical.jpg"
               alt="Plusieurs plumes d'oiseaux"
               border="0"
            />
         </div>
      </div>
   )
}

export default SectionPresentation
