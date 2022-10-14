import React from 'react'
import Header from '../components/Header'
import LetsTalk from '../components/LetsTalk'
import Partners from '../components/Partners'
import Projects from '../components/Projects'
import Services from '../components/Services'

const Main = () => {
    return (
        <>
            <Header />
            <Services />
            <Projects />
            <Partners />
            <LetsTalk />
        </>
    )
}

export default Main