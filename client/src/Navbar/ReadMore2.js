import React from "react";
import ReadMore from "./Readmore";

const ReadMore2 = () => {
  const longText =
    "Starting an online doctor consultation is very simple on Practo. Follow these 4 simple steps: • Choose your health concern • Connect with a doctor within 2 minutes • Ask your queries to the doctor via audio or video call • Get a valid online doctor prescription and a 3-day free online doctor consultation";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default ReadMore2;
