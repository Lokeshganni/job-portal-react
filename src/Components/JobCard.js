import { useEffect, useState } from 'react';

const JobCard = ({ job, onClick, onBookmark }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

useEffect(()=>{
 let url  =  window.location.href;
 let arr =  url.split("/");
 let bookmarkAddress = arr[3];
 if(bookmarkAddress==="bookmarks"){
    setIsBookmarked(true)
 }
},[])
   
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    onBookmark(job);
  };

  return (
    <div onClick={onClick} className="job-card">
      <h3>{job.title}</h3>
      <p>Location: {job.job_location_slug}</p>
      <p>Salary: {job.salary_max}</p>
      <p>Phone: {job.whatsapp_no}</p>
      <button onClick={handleBookmarkClick} className="bookmark-button">
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default JobCard;
