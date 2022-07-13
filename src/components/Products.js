import React, { useState } from 'react'
import "../styles/Products.css"
import Rate from '../components/Rate'
import data from "../data/Data"

const Products = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
        <div class="grid-container">
  <div class="grid-item">
    <div className="product-info">
        <p>title</p>
        <p className="product-price">30.000 FT</p>
        <div className="product-rating"> <Rate rating={rating} onRating={(rate) => setRating(rate)} count={5} /></div>

        <button>Hozzáadás a kosárhoz</button>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
  <p>title</p>
        <p className="product-price">29.000 FT</p>
        <div className="product-rating"> <Rate value={product.rating} text={`${product.numReviews} reviews`}/></div>

        <button>Hozzáadás a kosárhoz</button>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">28.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">27.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">26.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">25.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
    <div className="product-info">
        <p>title</p>
        <p className="product-price">24.000 FT</p>
    </div></div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">23.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">22.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">21.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">20.000 FT</p>
    </div>
  </div>
  <div class="grid-item">
  <div className="product-info">
        <p>title</p>
        <p className="product-price">19.000 FT</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Products