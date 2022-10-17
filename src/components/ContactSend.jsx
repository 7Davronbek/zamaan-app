import React from 'react'

const ContactSend = () => {
    // const [con, setCon] = useState(false);
    return (
        <>
            <div className="ContactSend">
                <div className="container">
                    <div className="row contact_send_box">
                        <div className="col-5">
                            <div className="contact_send_h">Ваши контакты</div>
                        </div>
                        <div className="col-7">
                            <input placeholder='Имя*' type="text" className="contact_send_inp" />
                            <input placeholder='Компания' type="text" className="contact_send_inp" />
                            <input placeholder='Номер телефона' type="text" className="contact_send_inp" />
                            <input placeholder='E-mail*' type="text" className="contact_send_inp" />
                        </div>
                    </div>

                </div>
            </div>


            <div className="ContactService">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact_service_h">Услуги</div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact_service_box_1">
                                <div className={`contact_service_h `}> Mobile Services </div>
                                <div className={`contact_service_h `}> Internet Marketing </div>
                            </div>
                            <div className="contact_service_box_2">
                                <div className={`contact_service_h_2 `}>Web Services </div>
                                <div className={`contact_service_h_2 `}>Design </div>
                                <div className={`contact_service_h_2 `}>Motion </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ContactSend second">
                <div className="container">
                    <div className="row contact_send_box">
                        <div className="col-5">
                            <div className="contact_send_h">
                                Расскажите нам все, что вам нужно
                            </div>
                        </div>
                        <div className="col-7">
                            <input placeholder='Напишите' type="text" className="contact_send_inp" />
                            <a href='' className="contact_send_add">
                                <img src="/img/plus.png" alt="" className="contact_send_img" />
                                <div className="contact_send_p"> <span className='me-3'><img src="/img/plus.svg" alt="" /></span> Добавить файл</div>
                            </a>
                            <button className="contact_send_btn">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSend