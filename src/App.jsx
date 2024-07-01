import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Products from './Components/Products';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import ProductInfo from './Components/ProductInfo';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios.get('https://fakestoreapi.com/products');
        setProducts(data.data);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, []);


  return (
    <BrowserRouter>
     <Header />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/user-login' element={ <Login /> }   />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/products' element={ <Products allProducts={products} />} />
          <Route path='/product/:id' element={<ProductInfo /> } />
          <Route path='*' element={<NotFound /> } />
      </Routes>
      
    </BrowserRouter>

  )
}

export default App;