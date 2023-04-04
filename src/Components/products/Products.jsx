import "./Products.scss";
import React, { useState } from 'react';
import CartComponent from '../CartComponent';
import ProductCard from "../product-card/ProductCard";

const Products = ({ products, setProducts }) => {
  const [cart, setCart] = useState([])
  console.log({ products, cart });

  function addToCart(id) {
    return () => {
      const updatedProducts = products.map(product => {
        if (product.id === id && product.stock) {
          product.stock--;


          let [cartItem] = cart.filter(item => item.id === id);
          if (!cartItem) {
            setCart([...cart, { ...product, stock: 1 }])
          }
          else {
            const updatedCart = cart.map(item => {
              if (item?.id === id) {
                item.stock++;
              }
              return item;

            })
            setCart([...updatedCart])
          }
        }
        return product
      });
      setProducts(updatedProducts)
      console.log({ updatedProducts });
    }
  }
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div>
        <h1>Cart</h1>
        <CartComponent cart={cart} />
      </div>
      <div data-testid="products-container" className="products-container">
        {products.map((product, index) => (
          <ProductCard {...product} key={index} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;