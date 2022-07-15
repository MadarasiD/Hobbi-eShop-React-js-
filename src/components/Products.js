import React, { useState } from 'react'
import "../styles/Products.css"
import Lenovo from "../itemcomponents/Lenovo"


const Products = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
        <div class="grid-container">
         
  <div class="grid-item">
    <div className="product-info">
      <img src="../assets/lenovo.jpg" alt="" />
        <p className='itemname'>Lenovo Legion T5 26AMR5 asztali számítógép, AMD Ryzen™ 5 5600G processzorral max. 4.40GHz, 16GB DDR4, 512GB SSD M.2 PCIe, GeForce RTX 3060 12GB GDDR6</p>
        <p className="product-price">30.000 FT</p>
        <div className="product-rating"> </div>

        <button > <a href="../itemcomponents/Lenovo.js"> <Lenovo />Vásárlás</a> </button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
  <p>title</p>
        <p className="product-price">29.000 FT</p>
        
        <button>Vásárlás</button>
        </div>   
    </div>
  
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">28.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">27.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">26.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">25.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
    <div className="product-info">
        <p>title</p>
        <p className="product-price">24.000 FT</p>
        <button>Vásárlás</button>
    </div>
    </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">23.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">22.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">21.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">20.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>

  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">19.000 FT</p>
        <button>Vásárlás</button>
    </div>
  </div>
  
</div>
</div>
  )
}

export default Products