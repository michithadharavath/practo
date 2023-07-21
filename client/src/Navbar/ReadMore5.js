import React from "react";
import ReadMore from "./Readmore";

const ReadMore5 = () => {
  const longText = "In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default ReadMore5;
