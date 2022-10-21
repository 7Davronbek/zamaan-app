import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const LetsTalk = () => {
  return (
    <Link to='/contacts' className='LetsTalk'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{getText('letsTalk')} <span><img src="/img/arrow.png" alt="" /></span></h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LetsTalk