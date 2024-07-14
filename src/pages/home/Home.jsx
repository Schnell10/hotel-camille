import React from 'react'
import SectionPresentation from '../../components/sectionPresentation/SectionPresentation'
import SectionServices from '../../components/sectionServices/SectionServices'
import SectionOffers from '../../components/sectionOffers/SectionOffers'

const Home = () => {
   return (
      <div>
         <SectionPresentation />
         <SectionServices />
         <SectionOffers />
      </div>
   )
}

export default Home
