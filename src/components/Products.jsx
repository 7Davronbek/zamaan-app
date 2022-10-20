import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PATH } from '../tools/constants'

const Products = () => {
    const [productTitle, setProductTitle] = useState([])
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')

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

    const getProductById = async ()  => {
        await axios.get(API_PATH + `/projects/?pk=${id === '' ? '' : id}`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    } 

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
        console.log(productTitle);
        getTitle()
        getProducts()
        getProductById()
    }, [id])

    return (
        <div className='Products'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="wrap">
                            {productTitle && productTitle.map((item, index) => (
                                <h6
                                    // onClick={() => filterCategory(item)}
                                    onClick={e => setId(item.id)}
                                    key={index}>{item.name}</h6>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {products && products.map((item, index) => (
                        <div key={index} className="col-lg-6">
                            <a href={item.link} className="cards">
                                <img className='w-100' src={item.image} alt={item.name} />
                                <h5>{item.name}</h5>
                                <h4>Mobile app</h4>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products