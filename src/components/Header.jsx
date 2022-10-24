import { getText } from "../locales"


const Header = () => {

    return (
        <div className='Header'>
            <div className="container">
                <div className="blur"></div>
                <div className="row justify-content-end">
                    <div className="col-lg-9">
                        <h1>{getText('target')}</h1>
                        <div className="myBtn">
                            <a className='btn' target={"_blank"} rel="noreferrer" href="tel: +998 90 825 28 38">{getText('freeConsult')}</a>
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