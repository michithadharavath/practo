import React from "react";
import ReadMore from "./Readmore";

const ReadMore1 = () => {
  const longText =
    " Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way   to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.";

  return (
    <div>
      {/* <h1>Read More Example</h1> */}
      <ReadMore text={longText} maxLength={70} style={{ border: "none" }} />
    </div>
  );
};

export default ReadMore1;
