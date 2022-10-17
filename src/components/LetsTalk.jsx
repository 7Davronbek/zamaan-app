import React from 'react'
import { Link } from 'react-router-dom'

const LetsTalk = () => {
  return (
    <Link to='/contacts' className='LetsTalk'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>давай поговорим <span><img src="/img/arrow.png" alt="" /></span></h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LetsTalk