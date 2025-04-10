import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroPage from '../pages/HeroPage'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HeroPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
