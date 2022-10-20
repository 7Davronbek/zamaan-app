import React from 'react'
import ContactSend from '../components/ContactSend'

const Contacts = () => {
    return (
        <>
            <div className="Contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact_h">ДАВАЙ РАБОТАТЬ ВМЕСТЕ !</div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_soc">
                                <a target={'_blank'} className='contact_mail' href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=zamaangroupuz@gmail.com">zamaangroupuz@gmail.com</a>
                                <div className="contact_icon">
                                    <a href=""><img src="/img/telegram.svg" alt="" className="contact_icon" /></a>
                                    <a href=""><img src="/img/insta.svg" alt="" className="contact_icon ms-4" /></a>
                                    <a href=""><img src="/img/facebook.svg" alt="" className="contact_icon ms-4" /></a>
                                </div>
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