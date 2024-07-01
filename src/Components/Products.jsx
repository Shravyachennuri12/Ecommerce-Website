/* eslint-disable react/prop-types */
import React from 'react';

import EachProduct from './Eachproduct';

const Products = (props) => {

  const { allProducts } = props;


  const eachProductInfo = allProducts.map((product, index) => <EachProduct key={index} product={product} />)

  return (
    <div>
        <h1 className='text-center' >Products</h1>
        <hr />
        <div className=' d-flex justify-content-around flex-wrap' >
          {eachProductInfo}
        </div>
    </div>
  )
}

export default Products