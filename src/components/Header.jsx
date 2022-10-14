import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-7">
                    <h1>Нам важны ваши цели!</h1>
                    <div className="myBtn">
                        <a className='btn' href="/">Бесплатная консультация</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="back">
            <img src="img/header.png" alt="" />
        </div>
    </div>
  )
}

export default Header