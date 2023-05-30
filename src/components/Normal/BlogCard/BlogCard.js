import './BlogCard.scss'
import topImage from '../../../images/Main/BlogAndMedia/topImage.png'

const BlogCard = ({ dateValue, h1Value, pValue }) => {
    return (
        <div className='blogCard'>
            <img src={topImage} alt="sekil yoxdur" className="topImage" />
            <div className="bottomPart">
                <h1>{h1Value}</h1>
                <p>{pValue}</p>
                <div className="dateAndButton">
                    <p className='date'>{dateValue}</p>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0711 17.0711C20.9763 13.1658 20.9763 6.83417 17.0711 2.92893C13.1658 -0.97631 6.83419 -0.97631 2.92895 2.92893C-0.976295 6.83417 -0.976295 13.1658 2.92895 17.0711C6.83419 20.9763 13.1658 20.9763 17.0711 17.0711ZM12.1893 9.24998L10.4696 7.5303C10.1767 7.23741 10.1767 6.76254 10.4696 6.46964C10.7625 6.17675 11.2374 6.17675 11.5303 6.46964L13.8232 8.76254C14.5066 9.44596 14.5066 10.554 13.8232 11.2374L11.5303 13.5303C11.2374 13.8232 10.7625 13.8232 10.4696 13.5303C10.1767 13.2374 10.1767 12.7625 10.4696 12.4696L12.1893 10.75L5.99993 10.75C5.58572 10.75 5.24993 10.4142 5.24993 9.99998C5.24993 9.58576 5.58572 9.24998 5.99993 9.24998L12.1893 9.24998Z" fill="#2B3F6C" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard