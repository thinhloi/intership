import { Footer } from '../components/Footer';
import { HeaderLogo } from '../components/HeaderLogo';
import { HomeIndex } from '../components/Home';

export const Home = () => {
    return (
        <div className='container'>
            <HeaderLogo />
            <HomeIndex />
            <Footer />
        </div>
    );
};