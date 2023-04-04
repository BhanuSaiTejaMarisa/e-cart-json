import "./ProductCard.scss"
import React from 'react';

const ProductCard = ({ id, name, price, stock, addToCart }) => {
  return (
    <div data-testid="product-card" className="ProductCard">
      <h3 data-testid="name">Name: {name}</h3>
      <h5 data-testid="price">Price: {price}</h5>
      <p data-testid="quantity">Quantity: {stock}</p>
      {stock ? <button data-testid="add-btn" onClick={addToCart(id)}>Add to cart</button>
        :
        <button className="out-of-stock-btn" disabled>Out of Stock</button>
      }
    </div>
  );
};

export default ProductCard;
