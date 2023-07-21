import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCheckoutPage.css";
const ProductCheckoutPage = ({ cartItems, address, handlePayment }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate();
  const handleGoToPaymentPage = () => {
    navigate("/ProductPaymentPage");
  };
  return (
    <div className="checkout-page mb-5 ">
      <h4>Checkout</h4>
      <div className="cart">
        <h3>Cart:</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - Quantity: {item.quantity} - Total Price: ${item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="address">
        <h3>Shipping Address:</h3>
        <p>{address}</p>
      </div>
      <div className="total-price">
        <h3>Total Price: ${totalPrice}</h3>
      </div>

      <button onClick={handleGoToPaymentPage} className="Payment-button">
        {" "}
        Proceed to Payment
      </button>
    </div>
  );
};

export default ProductCheckoutPage;
