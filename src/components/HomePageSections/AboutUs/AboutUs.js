import "./AboutUs.scss";
import AboutUsContainer from "../../Normal/AboutUsContainer/AboutUsContainer";
import TextPart from "./../../Normal/TextPart/TextPart";
import decorGroup1 from "../../../images/Main/AboutUs/decorGroup1.png";
import { useEffect } from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs" id="aboutUs">
      <img className="decorGroup" src={decorGroup1} alt="sekil yoxdur" />
      <TextPart
        pWidth="50%"
        hValue="Haqqımızda"
        pValue="
                    Lorem ipsum dolor sit amet consectetur.
                    Aliquet id tincidunt sit magna.
                    Lorem ipsum dolor sit amet consectetur.Aliquet id tincidunt"
        hColorValue="#102B55"
        pColorValue="#FF7A00"
        textPartMarginTop="20px"
      />

      <AboutUsContainer />
    </div>
  );
};

export default AboutUs;
