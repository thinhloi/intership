import {MdTrendingFlat} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { HelperCard } from '../HelperCard';

export const JobSidebar = () => {
    return (
        <div className='job-sidebar'>
            <div className='btn-text'>
                <MdTrendingFlat />
                <Link to='/'>Back to search</Link>
            </div>
            <HelperCard title='How to apply' />
        </div>
    );
};