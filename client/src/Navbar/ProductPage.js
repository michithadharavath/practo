import React from "react";
import "./ProductPage.css";
const ProductPage = ({ product, addToCart }) => {
  const { name, price, image, discount } = product;

  return (
    <div className="product1">
      <img src={image} alt={name} />
      <p>{name}</p>
      <h4>Price: ${price}</h4>
      {discount && <p>Discount Offer: {discount}% off</p>}
      <button onClick={() => addToCart(product)} className="addCart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
