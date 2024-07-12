import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Book from './pages/book/Book'
import Offers from './pages/offers/Offers'
import Restaurant from './pages/restaurant/Restaurant'
import Rooms from './pages/rooms/Rooms'
import Page404 from './pages/page-404/Page404'

function App() {
   return (
      <div>
         <Router>
            <Layout>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/book" element={<Book />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/restaurant" element={<Restaurant />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="*" element={<Page404 />} />
               </Routes>
            </Layout>
         </Router>
      </div>
   )
}

export default App
