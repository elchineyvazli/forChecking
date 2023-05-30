import './CampaignContainer.scss'
import decor1 from '../../../images/Main/PresentsAndCampaign/letter1.png'
import decor2 from '../../../images/Main/PresentsAndCampaign/letter2.png'
import decorGroup from '../../../images/Main/PresentsAndCampaign/decorGroup.png'

const CampaignContainer = () => {
    return (
        <div className='campaignContainer'>

            <img className='decor1' src={decor1} alt="sekil yoxdur" />
            <img className='decor2' src={decor2} alt="sekil yoxdur" />
            <img className='decorGroup' src={decorGroup} alt="sekil yoxdur" />

            <div className="line"></div>
            <h1>
                Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq
                istəyirsinizsə abunə olun
            </h1>
            <div className="inputPart">
                <input type="text" id="textInput" placeholder='example@gmail.com' />
                <button>
                    Göndər
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.16669" y="1.3335" width="16.6667" height="13.3333" rx="4.16667" stroke="#FDFDFD" stroke-width="1.25" />
                        <path d="M4.49994 5.5L8.49994 8.5C9.09253 8.94444 9.90735 8.94444 10.4999 8.5L14.4999 5.5" stroke="#FDFDFD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default CampaignContainer