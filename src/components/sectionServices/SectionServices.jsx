import React, { useEffect, useState } from 'react'
import Slideshow from '../slideshow/Slideshow'

import './sectionServices.scss'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import Video from './video/Video'

const SectionServices = () => {
   const [isVisible, setIsVisible] = useState(false)
   const { ref, inView } = useInView({
      threshold: 0.5, // seuil d'intersection
   })

   useEffect(() => {
      if (inView) {
         setIsVisible(true)
      }
   }, [inView])

   return (
      <ParallaxProvider>
         <div className="services">
            <div className="slideshow-text">
               <div className="slideshow">
                  <Slideshow />
                  <img
                     className="slideshow-mobile"
                     src="https://i.ibb.co/tZtN6tp/slideshow1.jpg"
                     alt="salle de bain d'une chambre d'hotel"
                  />
               </div>
               <div
                  className={`text-services ${isVisible ? 'visible' : ''}`}
                  ref={ref}
               >
                  <h3>
                     SERVICES <span>& PRESTATIONS</span>
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
                  <Link to="restaurant">
                     <Button>VOIR LES RESTAURANTS</Button>
                  </Link>
               </div>
            </div>
            <Parallax className="parallax-container" speed={-60}>
               <img
                  className="img-pool"
                  src="https://i.ibb.co/23kvdrc/services-vertical.jpg"
                  alt="Vu sur la piscine d'un hôtel"
                  loading="lazy"
               />
            </Parallax>
            <Parallax className="parallax-container-two" speed={20}>
               <Video />
            </Parallax>
         </div>
      </ParallaxProvider>
   )
}

export default SectionServices
