import React from "react";
import ReadMore from "./Readmore";

const ReadMore3 = () => {
  const longText =
    "   We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor.";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default ReadMore3;
