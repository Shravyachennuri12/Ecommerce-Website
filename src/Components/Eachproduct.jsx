/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

import { Link } from 'react-router-dom'

import './Eachproduct.css'

const EachProduct = (props) => {

    const { image, title, id } = props.product
  return (
    <div className='shadow rounded m-2 d-flex flex-column justify-content-around align-items-center border w-25 text-center p-3 m-1' >
        <img src={image} height='150px' alt="image" />
        <h4>Title : {title}</h4>
        <div>
         <Link  to={`/product/${id}`} state={props.product} >View More info </Link>
        </div>
    </div>
  )
}



export default EachProduct;