import moment from 'moment';
import { useParams } from 'react-router';
import { useFetchData } from '../../utils/useFetch';
import { JobInfo, JobPostTime } from './JobInfo'
import { JobCardMini } from '../JobCard';

export const JobContent = ({ data }) => {
    const { id } = useParams();
    const { apiData } = useFetchData(
        `https://www.themuse.com/api/public/jobs/${id}`
    );
    return (
        <>
            {!apiData ? (
                <p>Loading...</p>
            ) : (
                <div className='job-content'>
                    <p className='job-title'>{apiData.name}</p>
                    <JobInfo title={apiData.type} />
                    <JobPostTime
                        title={moment(apiData.publication_date).fromNow()}
                    />
                    <JobCardMini
                        Location={apiData.locations[0].name}
                        Author={apiData.company.name}
                        Cover={`https://assets.themuse.com/uploaded/companies/${apiData.company.id}/small_logo.png`}
                    />
                    <p dangerouslySetInnerHTML={{ __html: apiData.contents }} />
                </div>
            )}
        </>
    );
};