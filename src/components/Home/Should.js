import {MdTrendingFlat} from 'react-icons/md';
import { Button } from '../Button';

export const Should = () => {
    return (
        <div className='why-should'>
            <div className='col-6'>
                <h1>Why should you have a cat?</h1>
                <p>
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety leves
                </p>
                <Button
                    variant='text'
                    text='read more'
                    endIcon={<MdTrendingFlat />}
                />
            </div>
            <div className='row'>
                <div className='col-6 f-end'>
                    <img
                        className='img-demo-1'
                        src='https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage2.4e193fd0.png&w=640&q=75'
                        alt=''
                    />
                    <img
                        className='img-demo-2'
                        src='https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage1.ed2005d9.png&w=384&q=75'
                        alt=''
                    />
                </div>
                <div className='col-6 f-end'>
                    <img
                        className='img-demo-3'
                        src='https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage3.084e290f.png&w=384&q=75'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};