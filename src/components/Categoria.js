import React, { useState } from 'react'
import '../styles/Categoria.css'
import { GiHamburgerMenu } from "react-icons/gi"

const Categoria = () => {
  return (
    <div className='dropdown2'>
          <ul>
            <li className='active ctg-btn'><a href="/" style={{display: 'flex',alignItems: 'center', textAlign: 'center'}}><GiHamburgerMenu className='hambika' style={{marginRight: 5}} />Kategória</a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="/">Tv és szórakozás</a>
                  <div className="sub-menu-2" style={{position: 'absolute', marginLeft: 145, marginTop: -32}}>
                    <ul>
                    <li><a href="/">Telefon,Tablet,Laptop</a></li>
                  <li><a href="/">Számítástechnika</a></li>
                  <li><a href="/">Fotó és Videó</a></li>
                  <li><a href="/">Okos Otthon</a></li>
                  <li><a href="/">Kiegészítők</a></li>
                  <li><a href="/">Könyvek</a></li>
                    </ul>
                  </div>
                  </li>
                  <li><a href="/">Telefon,Tablet,Laptop</a></li>
                  <li><a href="/">Számítástechnika</a></li>
                  <li><a href="/">Fotó és Videó</a></li>
                  <li><a href="/">Okos Otthon</a></li>
                  <li><a href="/">Kiegészítők</a></li>
                  <li><a href="/">Könyvek</a></li>
                  <li><a href="/">Szépségápolás</a></li>
                  <li><a href="/">Ékszerek</a></li>
                  <li><a href="/">Sport és szabadidő</a></li>
                </ul>
                </div> 
            </li>
          </ul>

    </div>
  )
}

export default Categoria