import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCart.css";

const ProductCart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  // const { products, setproducts, cartItems, setCartItems } = useContext(MyContext);
  const emptyimg = "EmptyCart.a7ae30f4.svg";
  const navigate = useNavigate();
  const handleGoToCheckoutPage = () => {
    navigate("/ProductCheckoutPage");
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="bg-light mb-5">
      <div className="container  ">
        <div className="cart">
          <h2> My Cart:{totalItemCount} Items</h2>
          <hr />
          {cartItems.length === 0 ? (
            <p>
              <img src={emptyimg} alt="" style={{ width: "200px", height: "200px" }} />
              <h6>Your cart is empty</h6>

              <hr />
              <h6 className="text-start">Payable amount: ${totalPrice} </h6>
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <img src={`${item.image}`} alt={item.name} width="100" />
                <p>
                  {item.name} - Quantity: {item.quantity} - Total Price: ${item.quantity * item.price}
                </p>

                <div className="d-flex justify-content-between">
                  <div>
                    <div class="input-group">
                      <button onClick={() => increaseQuantity(item)} class="btn btn-outline-info" type="button">
                        +
                      </button>
                      <button class="btn btn-info text-light" type="button">
                        {totalItemCount}
                      </button>
                      <button onClick={() => decreaseQuantity(item)} class="btn btn-outline-info" type="button">
                        -
                      </button>
                      {/* <div class="input-group-append"></div> */}
                    </div>
                  </div>
                  <div>
                    <button onClick={() => removeFromCart(item)} className="btnremove ">
                      <i className="bi bi-trash3-fill "></i>
                    </button>
                  </div>
                </div>

                <hr />
                <p>Payable amount: ${totalPrice} </p>
              </div>
            ))
          )}
          {/* Display the total item count on the cart button */}

          <button className="cart-button" onClick={handleGoToCheckoutPage}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCart;
