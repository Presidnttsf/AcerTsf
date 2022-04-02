import React from 'react'
import { useState, useEffect } from 'react';
import productData from '../Data/productData';
import axios from 'axios';



export default function DatafromPC() {




  return (
    <div>
      <h1>
        This is product Data from computer

      </h1>
      <div>
        {productData.map((item, a) =>
          <p>Name: {item.name} Discount: {item.discount} INDEX: {a} Stock: {item.stock}</p>)}

        {/* DATA UPDATE=>>> {product.map((item, a) => <p>{item.tid} {item.primaryTitle} Index: {a} </p>)} */}

        {/* Leaning react hooks! */}

        {/* plz explain difference between both state on line 49 and 50 */}
      </div>


    </div>
  )
}
