import React, { useState } from "react";
import "./ProductPaymentPage.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
const ProductPaymentPage = ({ cartItems, handlePaymentSuccess, handlePaymentFailure }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  // Calculate the total amount based on cart items

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = async () => {
    // Check if Stripe is available

    if (!stripe || !elements) {
      return;
    }

    // Create a payment method using the card element
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    // Handle payment result
    //     if (error) {
    //       console.error("Payment error:", error);
    //       handlePaymentFailure();
    //     } else {
    //       console.log("Payment successful:", paymentMethod);
    //       handlePaymentSuccess();
    //     }
    //   };
    if (error) {
      console.error("Payment error:", error);
      setPaymentError("Payment failed. Please check your card information and try again.");
      handlePaymentFailure();
    } else {
      console.log("Payment successful:", paymentMethod);
      setPaymentError(null); // Clear any previous error message
      handlePaymentSuccess();
    }
  };
  return (
    <div className="payment-page mb-5">
      {paymentError ? (
        <p>Error: {paymentError}</p>
      ) : (
        <>
          <h1>Payment Options</h1>
          <p>Total Amount: ${totalAmount}</p>
          <div className="payment-form">
            <CardElement style={{ width: "200px" }} />
            <button onClick={handlePayment} className="PayButton">
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};
ProductPaymentPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  handlePaymentSuccess: PropTypes.func.isRequired,
  handlePaymentFailure: PropTypes.func.isRequired,
};
export default ProductPaymentPage;
