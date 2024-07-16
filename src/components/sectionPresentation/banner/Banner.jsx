import React, { Component } from 'react'
import './banner.scss'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'

class Banner extends Component {
   render() {
      return (
         <div className="banner">
            {/* on utilise srcSet afin de choisir une image plus adapté à la taille de l'écran */}
            <img
               srcSet="
https://i.ibb.co/fGrV0k8/header.jpg 1920w,
https://i.ibb.co/g3t77p2/header-mobile.jpg 320w"
               sizes="(max-width: 768px) 100vw, (min-width: 769px) 80vw"
               src="https://i.ibb.co/fGrV0k8/header.jpg" /* Image par défaut pour les navigateurs ne supportant pas srcset */
               alt="intérieur d'une chambre d'hôtel"
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
      )
   }
}

export default Banner
