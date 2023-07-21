import React from "react";

const CartList = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  console.log("gdfgfd");
  return (
    <div>
      Cart List
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={`${item.image}`} alt={item.name} width="100" />
            <p>
              {item.name} - Quantity: {item.quantity} - Total Price: ${item.quantity * item.price}
            </p>
            <button onClick={() => increaseQuantity(item)}>+</button>
            <button onClick={() => decreaseQuantity(item)}>-</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
