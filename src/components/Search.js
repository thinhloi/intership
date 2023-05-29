import {MdOutlineWorkOutline} from "react-icons/md"
import { TextInputGroup } from './Input';

export const Search = ({ onChange, onClick }) => {
    return (
        <div className='search-group'>
            <TextInputGroup
                onChange={onChange}
                onClick={onClick}
                startIcon={<MdOutlineWorkOutline />}
                placeholder='Title, companies, expertise or benefits'
            />
        </div>
    );
};