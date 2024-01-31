import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
const JobRow = ({job}) => {
    // destructure job object 
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;

    //handle details button
    const handleDetailsBtn = () =>{
        console.log('Button Clicked of id',_id);
    }
    return (
        <tr  className="bg-white odd:bg-gray-50 overflow-x-scroll">
            <td className='capitalize'>{loggedInUserName}</td>
            <td>{jobTitle}</td>
            <td>{jobPostingDate}</td>
            <td>{applicationDeadline}</td>
            <td>{salaryRange}</td>
            <td>
                <Link to={`/jobdetaildisplay/${_id}`}><button onClick={handleDetailsBtn}
            className='text-blue-700 hover:bg-blue-600 hover:text-base-100 btn capitalize font-bold'>Details</button></Link></td>
        </tr>
    );
};

//Adding proptypes
JobRow.propTypes ={
    job: PropTypes.object.isRequired
}
export default JobRow;