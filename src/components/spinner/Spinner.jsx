import React from 'react'

import './spinner.scss'

const Spinner = () => {
   return (
      <div className="spinner">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <style>{`.st0{fill:#C2A68B;}`}</style>{' '}
            {/* Style spécifique pour le spinner */}
            <g>
               <g>
                  <path
                     className="st0"
                     d="M50.2,58.3c-6.1,4.2-13.5,6.2-20.8,5.6c-1.7-0.1-2.9-1.6-2.7-3.2c0.1-1.7,1.6-2.9,3.2-2.7
                       c6,0.5,12-1.1,16.9-4.5c11.8-8.1,14.8-24.4,6.6-36.2C45.3,5.4,29,2.5,17.2,10.6S2.5,35,10.6,46.8c2.1,3.1,4.8,5.6,7.9,7.5
                       c1.4,0.9,1.9,2.7,1,4.1c-0.9,1.4-2.7,1.9-4.1,1c-3.9-2.3-7.1-5.4-9.7-9.2c-10-14.5-6.4-34.5,8.2-44.5s34.5-6.4,44.5,8.2
                       C68.4,28.3,64.7,48.3,50.2,58.3z"
                  />
               </g>
            </g>
         </svg>
      </div>
   )
}

export default Spinner
