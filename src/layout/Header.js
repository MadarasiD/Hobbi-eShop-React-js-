import React from 'react';
import "../styles/Header.css"
import { TiShoppingCart } from "react-icons/ti";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Dropdown from '../components/Dropdown'


const Header = () => {
  return (
    <div className='header'>
        <div className="header-logo">
          <SiHomeassistantcommunitystore className='header-logoimage' fontSize="large"/>
          <h2 className='header-logotitle'>Hobbi eShop</h2>
      </div>

      <div className="header-search">
        <Dropdown />
      </div>

      <div className="header-nav">
        <div className="nav-item">
            <span className="nav-itemlineone">
                Hello Guest
            </span>
            <span className="nav-itemlinetwo">
                Sign in
            </span>
        </div>

        <div className="nav-item">
        <span className="nav-itemlineone">
                Your
            </span>
            <span className="nav-itemlinetwo">
                Shop
            </span>
          </div>

          <div className="nav-item">
                <TiShoppingCart fontSize="large" className='itembasket'/>

                <span className='nav-itemlinetwo nav-basketCount'>0</span>
            
          </div>
      </div>
      
      
    </div>
  )
}

export default Header