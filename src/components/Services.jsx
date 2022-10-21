import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { getText } from '../locales';
const Services = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className='Services'>
            <div className="container">
                <div className="d-flex">
                    <div className="titles  border1">
                        <div className="title">
                            <h2>{getText('services1')}</h2>
                            <h2 className='half'>{getText('services2')}</h2>
                        </div>
                        <div className="title">
                            <h2 className='half'>{getText('services1')}</h2>
                            <h2>{getText('services2')}</h2>
                        </div>
                    </div>
                    <Accordion className='service__list border2' open={open} toggle={toggle}>
                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId="1">
                                {getText('mobileCreate')} <div className='burger'>
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
                                {getText('webCreate')}   <div className='burger'>
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
                                {getText('marketing')}  <div className='burger'>
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
                                {getText('crmandbot')}  <div className='burger'>
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
                                {getText('threedAnimation')}  <div className='burger'>
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
                                {getText('design')}  <div className='burger'>
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