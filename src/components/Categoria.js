import React, { useState } from 'react'
import '../styles/Categoria.css'

const Categoria = () => {
  return (
    <div className='dropdown2'>
          <ul>
            <li><a href="/">Kategória</a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="/">Tv és szórakozás</a></li>
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