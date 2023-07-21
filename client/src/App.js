import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practo from "./Navbar/Practo";
import FindDoctors from "./Navbar/FindDoctors";
import VideoConsult from "./Navbar/VideoConsult";
import Medicines from "./Navbar/Medicines";
import LabTests from "./Navbar/LabTests";
import Surgeries from "./Navbar/Surgeries";
import NavbarHeader from "./Navbar/NavbarHeader";
import Footer from "./Footer/Footer";
import Arigister from "./signin&login/Arigister";
import Register from "./signin&login/Register";
import Login from "./signin&login/Login";
import ForgetPassword from "./signin&login/ForgetPassword";
import Myprofile from "./signin&login/Myprofile";
import { useContext } from "react";
import { MyContext } from "./context/CommonContext";
import ProductCart from "./Navbar/ProductCart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductCheckoutPage from "./Navbar/ProductCheckoutPage";
import ProductPaymentPage from "./Navbar/ProductPaymentPage";

function App() {
  const {
    cartItems,

    address,
    setShowCheckoutPage,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    handlePaymentSuccess,
    handlePaymentFailure,
  } = useContext(MyContext);
  const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path="/practo" element={<Practo />} />
          <Route path="/FindDoctors" element={<FindDoctors />} />
          <Route path="/VideoConsult" element={<VideoConsult />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/LabTests" element={<LabTests />} />
          <Route path="/Surgeries" element={<Surgeries />} />
          <Route path="/Arigister" element={<Arigister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route
            path="/ProductCart"
            element={
              <ProductCart cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />
            }
          />
          <Route
            path="/ProductCheckoutPage"
            element={<ProductCheckoutPage cartItems={cartItems} address={address} handlePayment={() => setShowCheckoutPage(false)} />}
          />

          <Route
            path="/ProductPaymentPage"
            element={
              <Elements stripe={stripePromise}>
                <ProductPaymentPage cartItems={cartItems} handlePaymentSuccess={handlePaymentSuccess} handlePaymentFailure={handlePaymentFailure} />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Arigister/> */}
    </div>
  );
}

export default App;
