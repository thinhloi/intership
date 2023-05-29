import { JobContent } from '../components/Job/JobContent';
import { JobSidebar } from '../components/Job/JobSidebar';
import { HeaderLogo } from '../components/HeaderLogo';

export const JobPage = () => {
    return (
        <>
            <div className='container'>
                <HeaderLogo />
                <div className='job-body'>
                    <JobSidebar />
                    <JobContent />
                </div>
            </div>
        </>
    );
};