import "./FreeConsulation.scss"
import LeftFreeConsulation from './../../Normal/LeftFreeConsulation/LeftFreeConsulation';
import RightFreeConsulation from './../../Normal/RightFreeConsulation/RightFreeConsulation';
import decorGroup1 from "../../../images/Main/FreeConsulation/decorGroup.png"

const FreeConsulation = () => {
    return (
        <div className="freeConsulation">
            <img className="decorGroupFree" src={decorGroup1} alt="sekil yoxdur" />
            <div className="containerFreeConsulation">
                <LeftFreeConsulation />
                <RightFreeConsulation />
            </div>
        </div>
    )
}

export default FreeConsulation