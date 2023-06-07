import {MdSearch} from 'react-icons/md';
import {MdTrendingFlat} from 'react-icons/md';
import { useFetch } from '../../utils/useFetch';
import { Button } from '../Button';
import { HeaderLogo } from '../HeaderLogo';
import { SearchBar } from '../SearchBar';
import { Other } from '../Other';

export const Landing = () => {
    const {apiData } = useFetch(
        'https://api.thecatapi.com/v1/breeds'
    );
    return (
        <div className='landing'>
            <div className='landing-1'>
                <div className='col-6'>
                    <HeaderLogo />
                    <p>Get to know more about your cat behind</p>
                    <SearchBar
                        endIcon={<MdSearch />}
                        data={apiData}
                    />
                </div>
            </div>
            <div className='landing-2'>
                <h1>66+ Breeds For you to discover</h1>
                <Button
                    variant='text'
                    text='see more'
                    endIcon={<MdTrendingFlat />}
                />

                <Other />
            </div>
        </div>
    );
};