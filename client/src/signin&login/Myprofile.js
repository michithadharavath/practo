import React, { useContext, useState, useEffect } from "react";
import { store } from "./Arigister";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../context/CommonContext";

function Myprofile() {
  const { token, setToken } = useContext(MyContext);
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/myprofile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      {data && (
        <center>
          token: {token}
          <h2> welcome user:{data.username}</h2>
          <br />
          <button onClick={() => setToken(null)}>Logout</button>
        </center>
      )}
    </div>
  );
}

export default Myprofile;
