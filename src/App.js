import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Contacts from './pages/Contacts'
import Main from './pages/Main'
import ServicesPage from './pages/ServicesPage'

const App = () => {
    return (
        <>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/services' element={<ServicesPage />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </HashRouter>
        </>
    )
}

export default App