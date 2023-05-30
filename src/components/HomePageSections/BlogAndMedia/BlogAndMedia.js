import './BlogAndMedia.scss'
import TextPart from './../../Normal/TextPart/TextPart';
import BlogContainer from './../../Normal/BlogContainer/BlogContainer';
import decorGroup1 from '../../../images/Main/BlogAndMedia/decorGroup1.png'
import decorGroup2 from '../../../images/Main/BlogAndMedia/decorGroup2.png'
import ShowAllOfThem from './../../Normal/ShowAllOfThem/ShowAllOfThem';

const BlogAndMedia = () => {
    return (
        <section
            className="blogAndMedia"
        >
            <img
                className='decorGroup1'
                src={decorGroup1}
                alt="sekil yoxdur"
            />

            <img
                className='decorGroup2'
                src={decorGroup2}
                alt="sekil yoxdur"
            />

            <TextPart hValue="Bloq və Media"
                pValue="Artıq JedAcademy ödənişlərini FizzaPay ilə ödəmək mümkündür"
                hColorValue="#102B55"
                pColorValue="#FF7A00"
                pWidth="90%"
            />

            <BlogContainer />

            <ShowAllOfThem
                whereValue="/"
            />
        </section>
    )
}

export default BlogAndMedia