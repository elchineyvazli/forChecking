import "./Why.scss";
import TextPart from "./../../Normal/TextPart/TextPart";
import WhyContainer from "../../Normal/WhyContainer/WhyContainer";
import decorGroup from '../../../images/Main/Why/decorGroup.png'

const Why = () => {
  return (
    <div className="why">
      <img className="whyDecorGroup" src={decorGroup} alt="sekil yoxdur" />
      <TextPart
        hValue="Niyə JED Academy?"
        pValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur.Aliquet id tincidunt"
        hColorValue="#102B55"
        pColorValue="#FF7A00"
        classNameTextPart="whyTextPart"
        textPartClassName="whyPTag"
      />
      <WhyContainer />
    </div>
  );
};

export default Why;
