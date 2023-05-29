import {MdPublic} from "react-icons/md"
import { CheckBox, Radio, TextInput } from '../Input';

export const HomeSidebar = () => {
    return (
        <div className='home-sidebar'>
            <CheckBox label='Full time' />
            <div className='location-group'>
                <TextInput
                    label='location'
                    startIcon={<MdPublic />}
                    placeholder='City, state, zip code or country'
                />
                <Radio label='Tokyo' />
                <Radio label='London' />
            </div>
        </div>
    );
};