import React from "react";
import ReadMore from "./Readmore";

const ReadMore6 = () => {
  const longText =
    "        Avail a free online consultation with top doctors in India during the India Health Hour. Click here for more details. We have the free questions service available on our health app only. Ask a question and get free online medical advice within 24 to 48 hours.";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default ReadMore6;
