import React from 'react'
import "../styles/Header2.css"
import { GiHamburgerMenu } from "react-icons/gi"
import Categoria from '../components/Categoria'

const Header2 = () => {
  return (
    <div className='header-bottom'>
       <div className='nav-categoria'>
           <Categoria />
        </div>

      <div className="header-search">
        
      </div>

     
        <div className="nav-item">
           
        </div>

        <div className="new-item">
        
          </div>

          <div className="nav-help">
                
            
          </div>
      
    </div>
  )
}

export default Header2