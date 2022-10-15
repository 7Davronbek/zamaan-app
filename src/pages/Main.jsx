import React from 'react'
import Header from '../components/Header'
import LetsTalk from '../components/LetsTalk'
import Partners from '../components/Partners'
import Products from '../components/Products'
import Projects from '../components/Projects'
import Services from '../components/Services'

const Main = () => {
    return (
        <>
            <Header />
            <Services />
            <Products />
            <Projects />
            <Partners />
            <LetsTalk />
        </>
    )
}

export default Main