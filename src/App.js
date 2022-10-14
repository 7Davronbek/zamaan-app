import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './pages/Main'

const App = () => {
    return (
        <>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
                <Footer />
            </HashRouter>
        </>
    )
}

export default App