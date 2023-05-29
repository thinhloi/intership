import { Link } from 'react-router-dom';
import { JobInfo, JobLocation, JobPostTime } from './Job/JobInfo';

export const JobCard = ({
    LinkTo,
    Cover,
    Location,
    Title,
    Type,
    Author,
    Time,
}) => {
    return (
        <div className='job-card'>
            <Link to={`job/${LinkTo}`}>
                <img
                    src={Cover}
                    alt=''
                />
                <div className='job-content'>
                    <span className='job-content-header'>{Author}</span>
                    <span className='job-content-body'>{Title}</span>
                    <div className='job-content-footer'>
                        <JobInfo title={Type} />
                        <div className='job-info'>
                            <JobLocation title={Location} />
                            <JobPostTime title={Time} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export const JobCardMini = ({ Cover, Author, Location }) => {
    return (
        <div className='job-card-mini'>
            <img
                src={Cover}
                alt=''
            />
            <div>
                <span className='job-content-header'>{Author}</span>
                <JobLocation title={Location} />
            </div>
        </div>
    );
};