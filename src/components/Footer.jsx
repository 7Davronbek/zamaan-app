import React from 'react'
import { getText } from '../locales'

const Footer = () => {
    return (
        <>
            {/* <div className='Footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logo"><img src="/img/logo.png" alt="" /></div>
                            <div className="socialWrap">
                                <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/zamaangroup/"><img src="/img/insta.svg" alt="" /></a>
                                <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/zamaangroup"><img src="/img/facebook.svg" alt="" /></a>
                                <a href="/"><img src="/img/telegram.svg" alt="" /></a>
                            </div>
                        </div>

                        <div className="col-lg-7 ms-auto right">

                            <a href="/">{getText('footer1')}</a>
                            <h5>{getText('footer2')}</h5>
                            <a href="tel:+998 90 823 28 38">+998 90 823 28 38</a>
                            <a target={'_blank'} rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=zamaangroupuz@gmail.com">zamaangroupuz@gmail.com</a>

                        </div>
                    </div>
                </div>
            </div> */}

            <div className="FooterLine">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='d-flex align-items-center justify-content-center'>@ Copyright 2022.<span className='mx-1'><img src="/img/miniLogo.svg" alt="" /></span> Zamaan.  All rights reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer