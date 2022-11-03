import classnames from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_PATH } from '../tools/constants';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Products = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

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

                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={40}
                                            loop={false}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={false}
                                            modules={[Pagination]}
                                            className="mySwiper"
                                        >
                                            {item.project_images && item.project_images.map((item2, index2) => (
                                                <SwiperSlide key={index2}><img className='w-100' src={item2.image} alt='zamaan portfolio' /></SwiperSlide>
                                            ))}

                                        </Swiper>

                                        // <img key={index2} className='w-100' src={item2.image} alt='zamaan portfolio' />
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


        </>
    )
}

export default Products