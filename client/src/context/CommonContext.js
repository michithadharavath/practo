// MyContext.js
import React, { createContext, useState } from "react";

// Create a new context
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  // State or any other data you want to share
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");
  const [showCheckoutPage, setShowCheckoutPage] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Safi Natural Blood Purifier Syrup 200 ml",
      price: 105,
      image: "safi-syrup-200ml_0575040a-3c79-48fd-861a-d344615bbedd (1).jfif",
      discount: 10,
    },
    {
      id: 2,
      name: "Skinshine Fairness Soap 75 g",
      price: 85,
      image: "skinshine-soap-75gm_3107d4cc-822d-42e8-95d1-7d046f9ee4ea.jfif",
      discount: 10,
    },
    {
      id: 3,
      name: "Mediclin Soap 75 g",
      price: 130,
      image: "mediclin-soap-7-75gm_b0fe6dca-ca07-4b0d-985c-0cd488bae632.jfif",
      discount: 10,
    },
    {
      id: 4,
      name: "LSDEW Soap 75 g",
      price: 165,
      image: "lsdew-soap-75gm_2269fd3e-45c6-419b-b4a8-bb8f5653b6d4.jfif",
      discount: 15,
    },
    {
      id: 5,
      name: "Ducray Keracnyl Foaming Gel 100 ml",
      price: 200,
      image: "keracnyl-foaming-gel-100ml-1-s_fa59dc04-a944-47b6-86ee-bdc6e04c1a6c.jfif",
      discount: 10,
    },
    {
      id: 6,
      name: "Dermadew Soap 75 g",
      price: 185,
      image: "dermadew-acne-soap-75gm_4b50729a-ba14-4f59-ab1d-891c37f8571e.jfif",
      discount: 5,
    },
    {
      id: 7,
      name: "Sebamed Clear Face Cleansing Foam",
      price: 605,
      image: "sebamed-clear-face-clea-foam-150ml_1b617c6b-9c7a-482f-ae63-40fa397e3a1e.jfif",
      discount: 20,
    },

    // Add more products as needed...
  ]);
  // const [cartItems, setCartItems] = useState([]);
  // const [address, setAddress] = useState("");
  // const [showCheckoutPage, setShowCheckoutPage] = useState(false);
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };
  const increaseQuantity = (item) => {
    setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
  };

  const decreaseQuantity = (item) => {
    setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id && cartItem.quantity > 0 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)));
  };

  const handleCheckout = (address) => {
    setAddress(address);
    setShowCheckoutPage(true);
  };

  const handlePaymentSuccess = () => {
    // Implement your logic for successful payment
    setShowCheckoutPage(false);
    setCartItems([]);
    setAddress("");
    // Show a success message or redirect to a success page
    alert("Payment successful! Thank you for your order.");
  };

  const handlePaymentFailure = () => {
    // Implement your logic for failed payment
    // Show a failure message or redirect to an error page

    alert("Payment failed. Please try again.");
  };
  // Provide the context value to its consumers
  const contextValue = {
    token,
    setToken,
    products,
    setProducts,
    cartItems,
    setCartItems,
    address,
    setAddress,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    showCheckoutPage,
    setShowCheckoutPage,
    totalItemCount,
    addToCart,
    handleCheckout,
    handlePaymentSuccess,
    handlePaymentFailure,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider };
