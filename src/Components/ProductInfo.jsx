import React from "react";

import { useLocation } from "react-router-dom";

const ProductInfo = () => {
  const { state } = useLocation();

  const { image, category, price, description, title, rating } = state;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" >
        <h1 className="shadow-lg p-3 rounded border" >PRODUCT INFORMATION</h1>
    <div className="d-flex justify-content-around align-items-center vh-50 shadow-lg m-5 rounded m-3">
      <div className="m-3" >
        <img src={image} alt="product" height="250px" />
        <div className="mt-4 d-flex justify-content-around" >
            <button className="btn btn-warning" >Add to cart</button>

            <button className="ms-3 btn btn-info" >Buy Now</button>
        </div>
      </div>
      <div className="w-50" >
        <h4>Name : {title}</h4>
        <hr />
        <div className="d-flex justify-content-around" >
          <h5>Price &#x1F449;  ${price}</h5>
          <h5>Category &#x1F449; {category}</h5>
          <h5>Rating &#x1F449; {rating.rate}</h5>
        </div>
        <hr />
        <div>
          <p>About : {description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductInfo;
