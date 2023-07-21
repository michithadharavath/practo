import React from "react";
import ReadMore from "./MedicinesReadMore";

const MedicinesReadMore1 = () => {
  const longText =
    "Bengaluru, New Delhi, Mumbai, Thane, Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon, Ghaziabad, Noida, Faridabad, Mysuru, Hubli, Mandya, Mangaluru, Chitradurga, Dharwad, Chickmagalur, Belgavi, Badami, Gadag, Dandeli, Udupi, Dharmasthala, Bhadravati, Ranebennur, Hampi, Davangere, Hassan, Kodagu, Raichur, Vijaypura, Kalaburagi, Shimoga, Bagalkot, Kochi, Coimbatore, Jaipur, Chandigarh, Jalandhar, Lucknow, Bhopal, Bhubaneshwar, Dehradun, Indore, Nagpur, Amritsar, Ludhiana, Agra, Allahabad, Anakapalli, Aurangabad, Bheemavaram, Bhilai, Bidar, Bilaspur, Chikkaballapur, Chittoor, Cuddallore, Cuttack, Dombivli, Goa, Guntur, Guwahati, Jaisalmer, Jodhpur, Kadapa, Kakinada, Kalyan, Kamareddy, Kancheepuram, Kanpur, Karimnagar, Khammam, Kolar, Kota, Kurnool, Ludhiana, Madanapalli, Madurai, Mahaboobnagar, Meerut, Nalgonda, Nashik, Navi Mumbai, Nellore, Nizamabad, Panchkula, Panipat, Patna, Pimpri-Chinchwad, Pondy, Raipur, Rajahmundry, Rajkot, Ramanagara, Ranchi, Rourkela, Salem, Secunderabad, Shimla, Silliguri, Srikakulam, Srikalahasti, Srinagar, Surat, Suryapeta, Thiruvananthapuram, Tirupati, Trichy, Tumakuru, Udaipur, Vadodara, Varanasi, Vasai, Vellore, Vijayawada, Visakhapatnam, Vizianagaram, Warangal.";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default MedicinesReadMore1;
