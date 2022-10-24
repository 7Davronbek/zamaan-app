import React from 'react'
import ContactSend from '../components/ContactSend'
import { getText } from '../locales'

const Contacts = () => {
    return (
        <>
            <div className="Contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact_h">{getText('letsWork')}</div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_soc">
                                <a target={'_blank'} rel="noreferrer" className='contact_mail' href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=zamaangroupuz@gmail.com">zamaangroupuz@gmail.com</a>
                                <a className='myA mt-4 contact_mail' target={'_blank'} rel="noreferrer" href="https://t.me/zamaan_group/">@zamaan_group</a>
                                {/* <div className="contact_icon">
                                    <a target={'_blank'} rel="noreferrer" href=""><img src="/img/telegram.svg" alt="" className="contact_icon" /></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/zamaangroup/"><img src="/img/insta.svg" alt="" className="contact_icon ms-4" /></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/zamaangroup"><img src="/img/facebook.svg" alt="" className="contact_icon ms-4" /></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSend />
        </>
    )
}

export default Contacts