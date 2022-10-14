import React, { useState } from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [burger, setBurger] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar);

    return (
        <>
            <div className={`navBar ${navbar ? 'navbarActive' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="logo">
                                <a href="/">
                                    <img className='w-100' src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div onClick={() => { setBurger(!burger) }} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>

                        <div className={`col-3 mobileWrap ${burger ? '' : 'burgered'}`}>
                            <ul className="nav-menu">
                                <li><a onClick={() => setBurger(!burger)} href="#questions">Главная</a></li>
                                <li><a onClick={() => setBurger(!burger)} href="#about">Услуги</a></li>
                                <li><a onClick={() => setBurger(!burger)} href="#contacts">Контакты</a></li>

                            </ul>

                            <div className="imggg d-lg-none d-block">
                                <img src="img/burger.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar