import React, { useState } from "react";
import "./ProductAddressForm.css";
const ProductAddressForm = ({ handleCheckout }) => {
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckout(address);
  };

  return (
    <div className="address-form">
      <h3>Enter Your Delivery Address:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={address} onChange={handleChange} placeholder=" Enter Your H.No ,Locality" className="input-address" />

        <button type="submit" className="addressButton">
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
};
//   const [userAddress, setUserAddress] = useState({
//     userName: "",
//     streetAddress: "",
//     city: "",
//     stateProvince: "",
//     postalCode: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save address to local storage
//     localStorage.setItem("userAddress", JSON.stringify(userAddress));
//     // Handle any other form submission logic
//     handleCheckout(userAddress);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>User Name:</label>
//         <input type="text" name="userName" value={userAddress.userName} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Street Address:</label>
//         <input type="text" name="streetAddress" value={userAddress.streetAddress} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>City:</label>
//         <input type="text" name="city" value={userAddress.city} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>State/Province:</label>
//         <input type="text" name="stateProvince" value={userAddress.stateProvince} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Postal Code:</label>
//         <input type="text" name="postalCode" value={userAddress.postalCode} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Country:</label>
//         <input type="text" name="country" value={userAddress.country} onChange={handleChange} required />
//       </div>
//       <button type="submit">Submit Address</button>
//     </form>
//   );
// };

export default ProductAddressForm;
