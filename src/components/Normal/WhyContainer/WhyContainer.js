import WhyCard from "../WhyCard/WhyCard";
import "./WhyContainer.scss";
import image1 from '../../../images/Main/Why/whyCartImage1.png'
import image2 from '../../../images/Main/Why/whyCartImage2.png'
import image3 from '../../../images/Main/Why/whyCartImage3.png'
import image4 from '../../../images/Main/Why/whyCartImage4.png'
import image5 from '../../../images/Main/Why/whyCartImage5.png'
import image6 from '../../../images/Main/Why/whyCartImage6.png'
import image7 from '../../../images/Main/Why/whyCartImage7.png'
import image8 from '../../../images/Main/Why/whyCartImage8.png'

const WhyContainer = () => {
    return (
        <div className="whyContainer">
            <WhyCard
                logoColor="#FF2C9C"
                imageValue={image1}
                h1Value="Kiçik Qruplar"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#173D7A"
                imageValue={image2}
                h1Value="Təcrübəli Təlimçilər"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#FF7A00"
                imageValue={image3}
                h1Value="Nəzəriyyə + Praktika"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#6CC551"
                imageValue={image4}
                h1Value="Təcrübə proqramı və Karyera dəstəyi"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#FF2C9C"
                imageValue={image5}
                h1Value="Ödənişsiz Sınaq Dərsləri"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#173D7A"
                imageValue={image6}
                h1Value="Əyani və Online dərslər"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#FF7A00"
                imageValue={image7}
                h1Value="Dərslərin Video Yazıları"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
            <WhyCard
                logoColor="#6CC551"
                imageValue={image8}
                h1Value="Tədrisə Zəmanət"
                pValue="Lorem ipsum dolor sit amet 
                consectetur. Habitant
                malesuada accumsan
                scelerisque suspendisse sed 
                arcu et orci nisi. "
            />
        </div>
    );
};

export default WhyContainer;
