import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch featured products
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(response => response.json())
      .then(data => setFeaturedProducts(data));

    // Fetch latest products
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(response => response.json())
      .then(data => setLatestProducts(data));

    // Fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const addToCart = (productId) => {
    // Implement your add to cart logic here
    alert(`Added product with ID ${productId} to cart!`);
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h5>Hey Shravya, welcome back to your dashboard!</h5>
        <hr />
      </div>

      {/* Promotional Banner */}
      <div className="bg-primary text-white text-center mb-4 p-4 rounded">
        <h2>Summer Sale! Up to 50% off on selected items</h2>
      </div>

      {/* Featured Products */}
      <div className="mb-4">
        <h3>Featured Products</h3>
        <div className="row">
          {featuredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button onClick={() => addToCart(product.id)} className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h3>Categories</h3>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{category}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-4">
        <h3>Latest Products</h3>
        <div className="row">
          {latestProducts.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button onClick={() => addToCart(product.id)} className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
