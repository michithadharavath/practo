import React from "react";
import ReadMore from "./Readmore";

const ReadMore4 = () => {
  const longText =
    "            The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online consultation with a doctor is completely safe and secured with 256-bit encryption.";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default ReadMore4;
