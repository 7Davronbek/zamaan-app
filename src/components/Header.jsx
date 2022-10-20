

const Header = () => {

    return (
        <div className='Header'>
            <div className="container">
                <div className="blur"></div>
                <div className="row justify-content-end">
                    <div className="col-lg-9">
                        <h1>Нам важны ваши цели!</h1>
                        <div className="myBtn">
                            <a className='btn' target={"_blank"} rel="noreferrer" href="tel: +9989082328">Бесплатная консультация</a>
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