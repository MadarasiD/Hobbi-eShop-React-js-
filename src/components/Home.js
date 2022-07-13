import React from 'react'
import "../styles/Home.css"
import Products from './Products'

const Home = () => {
  return (
    <div>
        
        <div className="home-container" >
            <img src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='home-image'/>


            <div className="home-row">
                <Products />
               
            </div>

          
        </div>


    
    </div>
  )
}

export default Home