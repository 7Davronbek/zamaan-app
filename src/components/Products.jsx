// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { API_PATH } from '../tools/constants'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { getText } from '../locales';
import axios from 'axios';
import { API_PATH } from '../tools/constants';

const Products = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    // const [productTitle, setProductTitle] = useState([])
    // const [products, setProducts] = useState([])
    // const [id, setId] = useState('')

    // const [datas, setDatas] = useState(products)
    // const allCategories = ['All', ...new Set(datas.map((item) => item.service))]
    // const [category2, setCategory2] = useState(allCategories)

    // const filterCategory = category => {
    //     const newItem = products.filter((item) => item.service === category2)
    //     setDatas(newItem)

    //     if (category2 === 'All') {
    //         setDatas(products)
    //         return
    //     }
    // }

    // const getProductById = async () => {
    //     await axios.get(API_PATH + `/projects/?pk=${id === '' ? '' : id}`)
    //         .then((res) => {
    //             setProducts(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    // const getTitle = async () => {
    //     await axios.get(API_PATH + '/services')
    //         .then(res => {
    //             setProductTitle(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // const getProducts = async () => {
    //     await axios.get(API_PATH + '/projects')
    //         .then(res => {
    //             setProducts(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     getTitle()
    //     getProducts()
    //     getProductById()
    // }, [id])

    const [name, setName] = useState([])
    const [product, setProduct] = useState([])
    const [activeGenre, setActiveGenre] = useState(1)
    const [filtered, setFiltered] = useState([])
    const [motion, setMotion] = useState([])

    const getName = async () => {
        await axios.get(API_PATH + '/services')
            .then((res) => {
                setName(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getProduct = async () => {
        await axios.get(API_PATH + '/projects')
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const change = () => {

        if (activeGenre === 1) {
            setFiltered(product)
            return;
        }

        if (activeGenre === 9) {
            setFiltered(motion)
            return;
        }

        const filtered = product.filter((item) => item.service === activeGenre)
        setFiltered(filtered)
    }

    const getMotion = async () => {
        await axios.get(API_PATH + '/project-moshin/')
            .then((res) => {
                setMotion(res.data)
            })
    }

    useEffect(() => {
        getName()
        getProduct()
        change()
        getMotion()
    }, [activeGenre])

    return (
        <>
            <div className='Products'>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">

                            <div className="wrap mb-5 pb-5">
                                {name && name.map((item, index) => (
                                    <h6
                                        key={index}
                                        className={classnames({ active: activeTab === index + 1 })}
                                        onClick={() => { toggle(index + 1); setActiveGenre(item.id) }}
                                    >{item.name}</h6>
                                ))}

                            </div>
                        </div>
                        {filtered && filtered.map((item, index) => (
                            <div key={index} className={`${item.video ? 'col-lg-12' : 'col-lg-6'}`}>
                                <a href={item.link} className="cards">
                                    {item.project_images && item.project_images.map((item2, index2) => (
                                        <img key={index2} className='w-100' src={item2.image} alt='zamaan portfolio' />
                                    ))}
                                    {item.video &&
                                        <video muted loop autoPlay>
                                            <source src={item.video} type="video/mp4" />
                                        </video>
                                    }
                                    <h5>{item.name}</h5>
                                    <h4>{item.subname}</h4>
                                </a>
                            </div>
                        ))}
                        {activeGenre === 1 &&
                            product?.slice(0, 4).map((item, index) => (
                                <div key={index} className="col-lg-6">
                                    <a href={item.link} className="cards">
                                        {item.project_images && item.project_images.map((item2, index2) => (
                                            <img key={index2} className='w-100' src={item2.image} alt='zamaan portfolio' />
                                        ))}
                                        <h5>{item.name}</h5>
                                        <h4>{item.subname}</h4>
                                    </a>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            {/* <div className='Products'>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">

                            <div className="wrap">
                                <h6
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >{getText('mobileCreate')}</h6>

                                <h6
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >{getText('webCreate')} </h6>
                                <h6
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >{getText('marketing')}</h6>
                                <h6
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >{getText('design')}</h6>
                                <h6
                                    className={classnames({ active: activeTab === '5' })}
                                    onClick={() => { toggle('5'); }}
                                >{getText('threedAnimation')}</h6>
                                <h6
                                    className={classnames({ active: activeTab === '6' })}
                                    onClick={() => { toggle('6'); }}
                                >{getText('crmandbot')}</h6>

                            </div>
                        </div>
                    </div>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1" className=''>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/1.png' alt='zamaan portfolio' />
                                        <h5>Ol Ber</h5>
                                        <h4>Маркетплейс</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/2.png' alt='zamaan portfolio' />
                                        <h5>Home School</h5>
                                        <h4>Образование</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/3.png' alt='zamaan portfolio' />
                                        <h5>Baht Women</h5>
                                        <h4>Образование</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/4.png' alt='zamaan portfolio' />
                                        <h5>Onzone</h5>
                                        <h4>Маркетплейс</h4>
                                    </a>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="2" className=''>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/5.png' alt='zamaan portfolio' />
                                        <h5>Smart Lion Biulding</h5>
                                        <h4>Сэндвич панели для стен и кровли</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/6.png' alt='zamaan portfolio' />
                                        <h5>Greencardusa.uz</h5>
                                        <h4>Лоторея</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/7.png' alt='zamaan portfolio' />
                                        <h5>besthouse.uz</h5>
                                        <h4>Продажа квартиры</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/8.png' alt='zamaan portfolio' />
                                        <h5>Rasulov GI</h5>
                                        <h4>Двери</h4>
                                    </a>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="3" className=''>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/9.png' alt='zamaan portfolio' />
                                        <h5>chinorkent_uz</h5>
                                        <h4>Место для отдыха</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/10.png' alt='zamaan portfolio' />
                                        <h5>biostep.organica</h5>
                                        <h4>Здоровье/красота</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/11.png' alt='zamaan portfolio' />
                                        <h5></h5>
                                        <h4>navigate_english_academy</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/12.png' alt='zamaan portfolio' />
                                        <h5>ilpatio_tashkent</h5>
                                        <h4>Ресторан</h4>
                                    </a>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="4" className=''>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/13.png' alt='zamaan portfolio' />
                                        <h5>pizza.uz</h5>
                                        <h4>Еда</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/14.png' alt='zamaan portfolio' />
                                        <h5>Фаст-фуд</h5>
                                        <h4>Еда</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/15.png' alt='zamaan portfolio' />
                                        <h5>Fresh Pizza</h5>
                                        <h4>Еда</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/16.png' alt='zamaan portfolio' />
                                        <h5>ilpatio_tashkent</h5>
                                        <h4>Ресторан</h4>
                                    </a>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="5" className='moushen'>
                            <div className="row">
                                <div className="col-lg-12">
                                    <a className="cards">
                                        <video muted loop autoPlay>
                                            <source src='/video/1.mp4' type="video/mp4" />
                                        </video>
                                        <h5>“Choco” палочки</h5>
                                        <h4>Sifat</h4>
                                    </a>
                                </div>
                                <div className="col-lg-12">
                                    <a className="cards">
                                        <video muted loop autoPlay>
                                            <source src='/video/2.mp4' type="video/mp4" />
                                        </video>
                                        <h5>Akfa windows</h5>
                                        <h4>Akfa</h4>
                                    </a>
                                </div>
                                <div className="col-lg-12">
                                    <a className="cards">
                                        <video muted loop autoPlay>
                                            <source src='/video/3.mp4' type="video/mp4" />
                                        </video>
                                        <h5>Musaffosha Tabiiy Sut</h5>
                                        <h4>Musaffo</h4>
                                    </a>
                                </div>
                                <div className="col-lg-12">
                                    <a className="cards">
                                        <video muted loop autoPlay>
                                            <source src='/video/4.mp4' type="video/mp4" />
                                        </video>
                                        <h5>Кредит "Старт"</h5>
                                        <h4>Davr Bank</h4>
                                    </a>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tabId="6" className=''>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/17.png' alt='zamaan portfolio' />
                                        <h5>Express 24</h5>
                                        <h4>Работа в компании "Express 24"</h4>
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href='/' className="cards">
                                        <img className='w-100' src='/img/portfolio/18.png' alt='zamaan portfolio' />
                                        <h5>All Saver Bot</h5>
                                        <h4>Для скачивания видео из Secial Media</h4>
                                    </a>
                                </div>
                            </div>
                        </TabPane>

                    </TabContent>
                </div>
            </div> */}
        </>
    )
}

export default Products