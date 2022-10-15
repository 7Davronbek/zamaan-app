import React from 'react'
import ContactSend from '../components/ContactSend'

const Contacts = () => {
    return (
        <>
            <div className="Contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="contact_h">ДАВАЙ РАБОТАТЬ ВМЕСТЕ !</div>
                        </div>
                        <div className="col-6">
                            <div className="contact_soc">
                                <a href="" className="contact_mail">info@kokoagency.uz</a>
                                <div className="contact_icon">
                                    <a href=""><img src="/img/instagram.png" alt="" className="contact_icon" /></a>
                                    <a href=""><img src="/img/instagram.png" alt="" className="contact_icon ms-4" /></a>
                                    <a href=""><img src="/img/instagram.png" alt="" className="contact_icon ms-4" /></a>
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