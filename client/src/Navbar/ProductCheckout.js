import React, { useState } from "react";
import ProductCart from "./ProductCart";
import ProductAddressForm from "./ProductAddressForm";

const ProductCheckout = ({ cartItems }) => {
  const [shippingAddress, setShippingAddress] = useState(null);

  const handleAddressSubmit = (address) => {
    setShippingAddress(address);
  };

  // Calculate the total price of the cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h4>Checkout</h4>
      <ProductCart cartItems={cartItems} />
      <p>Total Price: ${totalPrice}</p>
      {!shippingAddress ? (
        <ProductAddressForm onSubmit={handleAddressSubmit} />
      ) : (
        <div>
          <h3>Shipping Address:</h3>
          <p>Name: {shippingAddress.name}</p>
          {/* Display other address fields */}
          <button>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default ProductCheckout;
