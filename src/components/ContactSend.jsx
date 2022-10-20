import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { API_PATH, config } from '../tools/constants'

const ContactSend = () => {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')
    const [files, setFiles] = useState('')

    const pushService = e => {
        setService(old => [...old, e])
    }

    const handleClick = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('company', company)
        formData.append('phone', phone)
        // formData.append('email', email)
        formData.append('service', service)
        formData.append('message', message)
        formData.append('file', files)

        await axios.post(API_PATH + '/contact/', formData, config)
            .then((res) => {
                setName('')
                setCompany('')
                setPhone('')
                // setEmail('')
                setService('')
                setMessage('')
                setFiles('')
                toast.success("Siz bilan tez orada bog'lanamiz!", { position: "bottom-left" })
            })
            .catch(err => {
                toast.error("Internet Error!", { position: "bottom-left" })
            })
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <div className="ContactSend">
                    <div className="container">
                        <div className="row contact_send_box">
                            <div className="col-lg-5">
                                <div className="contact_send_h">Ваши контакты</div>
                            </div>
                            <div className="col-lg-7">
                                <input value={name} onChange={e => setName(e.target.value)} required placeholder='Имя*' type="text" className="contact_send_inp" />
                                <input value={company} onChange={e => setCompany(e.target.value)} required placeholder='Компания*' type="text" className="contact_send_inp" />
                                <input value={phone} onChange={e => setPhone(e.target.value)} required placeholder='Номер телефона*' type="number" className="contact_send_inp" />
                                {/* <input value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail' type="email" className="contact_send_inp" /> */}
                            </div>
                        </div>

                    </div>
                </div>


                <div className="ContactService">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact_service_h">Услуги*</div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact_service_box_1">
                                    <div onClick={e => pushService('Mobile')} className={`contact_service_h `}> Mobile Services </div>
                                    <div onClick={e => pushService('Internet')} className={`contact_service_h `}> Internet Marketing </div>
                                </div>
                                <div className="contact_service_box_2">
                                    <div onClick={e => pushService('Web')} className={`contact_service_h_2 `}>Web Services </div>
                                    <div onClick={e => pushService('Design')} className={`contact_service_h_2 `}>Design</div>
                                    <div onClick={e => pushService('Motion')} className={`contact_service_h_2 `}>Motion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="ContactSend second">
                    <div className="container">
                        <div className="row contact_send_box">
                            <div className="col-lg-5">
                                <div className="contact_send_h">
                                    Расскажите нам все, что вам нужно
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <input value={message} onChange={e => setMessage(e.target.value)} required placeholder='Напишите*' type="text" className="contact_send_inp" />
                                <input
                                    onChange={e => setFiles(e.target.files[0])}
                                    className='d-none' type="file" id='file' />
                                <label className='contact_send_add' htmlFor="file">
                                    <img src="/img/plus.png" alt="" className="contact_send_img" />
                                    <div className="contact_send_p"> <span className='me-3'><img src="/img/plus.svg" alt="" /></span> Добавить файл</div>
                                </label>
                                {files ? <><h5 className='text-white mt-3'>{files.name}</h5></> : <></>}

                                <button type='submit' className="contact_send_btn">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactSend