import PropTypes from 'prop-types'; 
const JobRow = ({job}) => {
    // destructure job object 
    const {_id,jobBannerImageUrl,jobTitle,loggedInUserName,jobCategory,category_key,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
    return (
        <tr>
            <td>{loggedInUserName}</td>
            <td>{jobTitle}</td>
            <td>{jobPostingDate}</td>
            <td>{applicationDeadline}</td>
            <td>{salaryRange}</td>
            <td><button className='btn'>Details</button></td>
        </tr>
    );
};

//Adding proptypes
JobRow.propTypes ={
    job: PropTypes.object.isRequired
}
export default JobRow;