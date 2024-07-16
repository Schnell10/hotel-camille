import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Book from './pages/book/Book'
import Offers from './pages/offers/Offers'
import Restaurant from './pages/restaurant/Restaurant'
import Rooms from './pages/rooms/Rooms'
import Page404 from './pages/page-404/Page404'
import Gallery from './pages/gallery/Gallery'
import ScrollToTop from './components/scrollTop/ScrollTop'

function App() {
   return (
      <div>
         <Router>
            {/* Composant ScrollToTop pour gérer le défilement vers le haut */}
            <ScrollToTop />
            <Layout>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/book" element={<Book />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/restaurant" element={<Restaurant />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="*" element={<Page404 />} />
               </Routes>
            </Layout>
         </Router>
      </div>
   )
}

export default App
