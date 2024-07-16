import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Composant pour faire défiler la page vers le haut lors du changement de route
const ScrollToTop = () => {
   //  useLocation pour obtenir l'objet location de react router
   const { pathname } = useLocation()

   useEffect(() => {
      // Défilement vers le haut de la page à chaque changement de route
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'auto', //le défilement est instantané
      })
   }, [pathname]) // on déclenche l'effet à chaque changement de pathname

   return null
}

export default ScrollToTop
