import './ShowAllOfThem.scss'
import { Link } from 'react-router-dom';

const ShowAllOfThem = ({ whereValue }) => {
    return (
        <div className='showAllOfThem'>
            <Link to={`/${whereValue}`} className='showAllOfThemButton'>
                Hamısına bax
            </Link>
        </div>
    )
}

export default ShowAllOfThem