import React from 'react'
import './sectionPresentation.scss'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import Banner from './banner/Banner'

const SectionPresentation = () => {
   const { ref, inView } = useInView({
      threshold: 0.4, // Déclenche l'observation lorsque 40% de l'élément est visible
   })

   return (
      <div className="presentation">
         <Banner />
         <div className="timeless-place">
            <div
               className={`text-presentation-container ${inView ? 'visible' : ''}`}
               ref={ref}
            >
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
            />
         </div>
      </div>
   )
}

export default SectionPresentation
