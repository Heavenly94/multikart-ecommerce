import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroPage from '../pages/HeroPage'
import Footer from '../component/Footer'
import OfferPage from '../pages/OfferPage'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/" element={ <Footer />} />
            <Route path="/" element={ <OfferPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
