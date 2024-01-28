import PropTypes from 'prop-types';
import { useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
const Blog = ({blog}) => {
    //destructure 
    const { id, image, title, author, date, category, tags, content} = blog;
    // declare a state for readMore 
    const [readMore, setReadMore] = useState(false);
    //declare a state to change button name
    const [btnName, setBtnName] = useState('Read More');
    //function
    const handleBtn = () =>{
        setReadMore(!readMore);
        setBtnName('Read Less');
    }
    return (
        <div className='py-6 border-b-2 border-gray-200'>
            <h1 className='font-bold text-2xl'>Blog Post: {id}</h1>
            <div className='md:flex md:gap-2'>
                <div className='md:flex-1'>
                <img src={image} className='rounded-md w-full object-cover' alt="" />
                </div>
                <div className='md:flex-1 pl-2'>
                    <h1 className='text-2xl font-bold text-pink-800'>{title}</h1>
                    <h1 className='text-black font-semibold py-2'>{author},<span className='text-gray-500'> {date}</span></h1>
                    <p className='text-gray-700'><span className='font-bold'>Category:</span><span className='text-blue-700 font-semibold'> {category}</span></p>
                    <div className='flex gap-2'>
                        {
                            tags.map(tag => <span key={tag} className='text-gray-500 text-sm pb-3'>#{tag}</span>)
                        }
                    </div>
                    <div>
                        {
                            readMore ? <p>{content}</p>
                            :
                            <p>{content.slice(0,600)}</p>
                        }
                        {
                            content.length > 600 && <button onClick={handleBtn} 
                             className='text-pink-800 underline'>{btnName}</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

//Adding proptypes
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
}
export default Blog;