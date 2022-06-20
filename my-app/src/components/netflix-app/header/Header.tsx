import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="showcase">
      <div className="d-flex">
        <div className="offset-5 col-6 mt-4">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
        </div>
        <div>
        <Link to='/' className='btn btn-danger mr-5 mt-5'>
            Sign In
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center h-75 align-items-center">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-white w-75 text-center display-2">
            Unlimited movies, TV, shows and more
          </h1>
          <p className="text-white w-75 text-center display-4">Watch anywhere. Cancel Anytimes</p>
          <Link to='/netflix-show' className='btn btn-lg col-5 btn-danger font-size-3 mt-4'>
            Watch Free for 30 Days
            <i className="fa fa-chevron-right ml-3"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
