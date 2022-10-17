import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logo"><img src="/img/logo.png" alt="" /></div>
                            <div className="socialWrap">
                                <a href="/"><img src="/img/insta.svg" alt="" /></a>
                                <a href="/"><img src="/img/facebook.svg" alt="" /></a>
                                <a href="/"><img src="/img/telegram.svg" alt="" /></a>
                            </div>
                        </div>

                        <div className="col-lg-7 ms-auto right">

                            <a href="/">Адрес: Город Ташкент, Яшнабадский район, Улица Ташсельмаш 8. Пн-Сб 09:00 - 18:00</a>
                            <h5>Контакты:</h5>
                            <a href="/">+998 90 823 28 38</a>
                            <a href="/">info@kokoagency.uz</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="FooterLine">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>@ Copyright 2022. All rights reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer