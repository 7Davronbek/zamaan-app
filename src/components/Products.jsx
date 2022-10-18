import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PATH } from '../tools/constants'

const Products = () => {
    const [productTitle, setProductTitle] = useState([])
    const [products, setProducts] = useState([])

    const getTitle = async () => {
        await axios.get(API_PATH + '/services')
            .then(res => {
                setProductTitle(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    const getProducts = async () => {
        await axios.get(API_PATH + '/projects')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getTitle()
    }, [])
    
    return (
        <div className='Products'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wrap">
                            <h6>Разработка приложения</h6>
                            <h6>Разработка сайтов </h6>
                            <h6>Комплексный маркетинг</h6>
                            <h6>Дизайн</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="btnWrap">
                            <h6>3D Анимация и моушен</h6>
                            <h6 className='m-0'>Разработка СRM систем и телеграм ботов</h6>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <a href='/' className="cards">
                            <img className='w-100' src="/img/portfolio/1.png" alt="" />
                            <h5>byte</h5>
                            <h4>Mobile app</h4>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href='/' className="cards">
                            <img className='w-100' src="/img/portfolio/1.png" alt="" />
                            <h5>byte</h5>
                            <h4>Mobile app</h4>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href='/' className="cards">
                            <img className='w-100' src="/img/portfolio/1.png" alt="" />
                            <h5>byte</h5>
                            <h4>Mobile app</h4>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a href='/' className="cards">
                            <img className='w-100' src="/img/portfolio/1.png" alt="" />
                            <h5>byte</h5>
                            <h4>Mobile app</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products