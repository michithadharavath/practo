import React, { useState } from "react";

const MedicinesReadmore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleTruncate} style={{ border: "none", background: "none", textDecoration: "underline" }}>
          {" "}
          {isTruncated ? "...See More" : "See Less"}
        </button>
      )}
    </div>
  );
};

export default MedicinesReadmore;
