import React, { useState } from "react";
import CGWebcam from './CustomSignsWebcam/CustomSignsWebcam';
import cssClasses from "./CustomSigns.module.css";

const CustomSigns = props => {
  const [classes, setClasses] = useState([]);

  return (
    <section className={cssClasses.customSigns}>
      <CGWebcam classes={classes} setClasses={setClasses} />
    </section>
  );

};

export default CustomSigns;