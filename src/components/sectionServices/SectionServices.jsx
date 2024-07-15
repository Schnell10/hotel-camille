import React from 'react'
import Slideshow from '../slideshow/Slideshow'

import './sectionServices.scss'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const SectionServices = () => {
   return (
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
            <div className="text-services">
               <h3>
                  SERVICES <span>& PRESTATIONS</span>
               </h3>
               <div className="separator" />
               <p>
                  Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                  orci porta dapibus. Lorem ipsum dolor sit amet.Nulla porttitor
                  accumsan tincidunt. Pellentesque in ipsum id orci porta
                  dapibus. Lorem ipsum dolor sit amet. Nulla porttitor accumsan
                  tincidunt. Pellentesque in ipsum id orci porta dapibus. Lorem
                  ipsum dolor sit amet.Nulla porttitor accumsan tincidunt.
                  Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                  sit amet.
               </p>
               <Link to="restaurant">
                  <Button>VOIR LES RESTAURANTS</Button>
               </Link>
            </div>
         </div>
         <img
            className="img-pool"
            src="https://i.ibb.co/23kvdrc/services-vertical.jpg"
            alt="Vu sur la piscine d'un hôtel"
            loading="lazy"
         />
         <div className="video-button">
            <div className="video">
               <img
                  className="img-video"
                  src="https://i.ibb.co/26JCxDD/video.jpg"
                  alt="video intérieur restaurant"
                  loading="lazy"
               />
               <svg
                  className="play-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="99.709"
                  height="99.709"
                  viewBox="0 0 99.709 99.709"
               >
                  <g id="play-media" transform="translate(1 1)">
                     <path
                        id="Path_1921"
                        data-name="Path 1921"
                        d="M7.381-1H90.328a8.39,8.39,0,0,1,8.381,8.381V90.328a8.39,8.39,0,0,1-8.381,8.381H7.381A8.39,8.39,0,0,1-1,90.328V7.381A8.39,8.39,0,0,1,7.381-1ZM90.328,94.709a4.386,4.386,0,0,0,4.381-4.381V7.381A4.386,4.386,0,0,0,90.328,3H7.381A4.386,4.386,0,0,0,3,7.381V90.328a4.386,4.386,0,0,0,4.381,4.381ZM30.9,23.04,75.156,48.854,30.9,74.669ZM67.217,48.854,34.9,30V67.7Z"
                        transform="translate(0)"
                        fill="#fff"
                     />
                  </g>
               </svg>
            </div>

            <Link to="gallery">
               <Button>VOIR LA GALERIE</Button>
            </Link>
         </div>
      </div>
   )
}

export default SectionServices
