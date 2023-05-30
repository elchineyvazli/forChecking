import './BlogContainer.scss'
import BlogCard from './../BlogCard/BlogCard';

const BlogContainer = () => {
    return (
        <div className='blogContainer'>

            <BlogCard
                h1Value="Lorem ipsum dolor sit amet"
                pValue="Lorem ipsum dolor sit amet consectetur. Sed erat accumsan cursus cras vel ac mr. Sed erat accumsan cursus cras vel ac mr."
                dateValue="12.12.2022"
            />
            <BlogCard
                h1Value="Lorem ipsum dolor sit amet"
                pValue="Lorem ipsum dolor sit amet consectetur. Sed erat accumsan cursus cras vel ac mr. Sed erat accumsan cursus cras vel ac mr."
                dateValue="12.12.2022"
            />
            <BlogCard
                h1Value="Lorem ipsum dolor sit amet"
                pValue="Lorem ipsum dolor sit amet consectetur. Sed erat accumsan cursus cras vel ac mr. Sed erat accumsan cursus cras vel ac mr."
                dateValue="12.12.2022"
            />

        </div>
    )
}

export default BlogContainer