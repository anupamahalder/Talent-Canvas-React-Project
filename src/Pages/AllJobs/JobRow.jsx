import PropTypes from 'prop-types'; 
const JobRow = ({job}) => {
    // destructure job object 
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
    return (
        <tr  className="bg-white odd:bg-gray-50">
            <td>{loggedInUserName}</td>
            <td>{jobTitle}</td>
            <td>{jobPostingDate}</td>
            <td>{applicationDeadline}</td>
            <td>{salaryRange}</td>
            <td><button className='text-blue-700 hover:bg-blue-600 hover:text-base-100 btn capitalize font-bold'>Details</button></td>
        </tr>
    );
};

//Adding proptypes
JobRow.propTypes ={
    job: PropTypes.object.isRequired
}
export default JobRow;