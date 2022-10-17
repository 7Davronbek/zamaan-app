import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
const Services = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    // const [wrap, setwrap] = useState(initialState);

    return (
        <div className='Services'>
            <div className="container">
                <div className="d-flex">
                    <div className="titles  border1">
                        <div className="title">
                            <h2>Услуги</h2>
                            <h2 className='half'>Проекты</h2>
                        </div>
                        <div className="title">
                            <h2 className='half'>Услуги</h2>
                            <h2>Проекты</h2>
                        </div>
                    </div>
                    <Accordion className='service__list border2' open={open} toggle={toggle}>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="1">
                                Разработка приложения  <div className='burger'>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody accordionId="1">

                                <h6>Создадим для вас:</h6>
                                <ul>
                                    <li>Интернет магазин</li>
                                    <li> Сайт визитка</li>
                                    <li>Корпоративные сайты</li>
                                    <li>Сложные системы</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="2">
                                Разработка сайтов   <div className='burger'>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody accordionId="2">

                                <h6>Создадим для вас:</h6>
                                <ul>
                                    <li>Интернет магазин</li>
                                    <li> Сайт визитка</li>
                                    <li>Корпоративные сайты</li>
                                    <li>Сложные системы</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="3">
                                Комплексный маркетинг  <div className='burger'>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody accordionId="3">

                                <h6>Создадим для вас:</h6>
                                <ul>
                                    <li>Интернет магазин</li>
                                    <li> Сайт визитка</li>
                                    <li>Корпоративные сайты</li>
                                    <li>Сложные системы</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="4">
                                Разработка СRM систем
                                и телеграм ботов  <div className='burger'>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody accordionId="4">

                                <h6>Создадим для вас:</h6>
                                <ul>
                                    <li>Интернет магазин</li>
                                    <li> Сайт визитка</li>
                                    <li>Корпоративные сайты</li>
                                    <li>Сложные системы</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="5">
                                3D Анимация и моушен  <div className='burger'>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody accordionId="5">

                                <h6>Создадим для вас:</h6>
                                <ul>
                                    <li>Интернет магазин</li>
                                    <li> Сайт визитка</li>
                                    <li>Корпоративные сайты</li>
                                    <li>Сложные системы</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="6">
                                Дизайн  <div className='burger'>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody accordionId="6">

                                <h6>Создадим для вас:</h6>
                                <ul>
                                    <li>Интернет магазин</li>
                                    <li> Сайт визитка</li>
                                    <li>Корпоративные сайты</li>
                                    <li>Сложные системы</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </div>
    )
}

export default Services