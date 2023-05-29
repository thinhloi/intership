import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdMoreHoriz } from "react-icons/md"
import { MdPublic } from "react-icons/md"
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { HomeJob } from '../components/Home/HomeJob'
import { CheckBox, Radio, TextInput } from '../components/Input'
import { HeaderLogo } from '../components/HeaderLogo'
import { Search } from '../components/Search'
import { CapitalizeWords } from '../utils/Capitalize'
import { useFetchData } from '../utils/useFetch'


const Home = () => {
    const [page, setPage] = useState(1);
    const [company, setCompany] = useState(null);
    const [companyTemp, setCompanyTemp] = useState(null);
    const [location, setLocation] = useState(null);
    const [locationTemp, setLocationTemp] = useState(null);

    let company_param = '';
    let location_param = '';
    if (company && company.length > 0) {
        company_param = `&company=${CapitalizeWords(company)}`;
    }

    if (location && location.length > 0) {
        location_param = `&location=${location}`;
    }

    let API_URL = `https://www.themuse.com/api/public/jobs?${company_param}${location_param}&page=${page}`;
    const { apiData } = useFetchData(API_URL);

    let pageTotal = '';
    if (apiData !== null) {
        pageTotal = apiData.page_count - 1;
    }

    const handlePageChange = async (page) => {
        setPage(page.selected + 1);
    };
    const handleSearchClick = () => {
        setCompany(companyTemp);
        setLocation(locationTemp);
    };

    return (
        <div className='container'>
            <HeaderLogo />
            <Search
                onChange={(e) => setCompanyTemp(e.target.value)}
                onClick={handleSearchClick}
            />
            {!apiData ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className='jobs-content'>
                        <div className='home-sidebar'>
                            <CheckBox label='Full time' />
                            <div className='location-group'>
                                <TextInput
                                    label='location'
                                    startIcon={<MdPublic />}
                                    placeholder='City, state, zip code or country'
                                    onChange={(e) =>
                                        setLocationTemp(e.target.value)
                                    }
                                />
                                <Radio label='London' />
                                <Radio label='Amsterdam' />
                                <Radio label='New York' />
                                <Radio label='Berlin' />

                            </div>
                        </div>
                        <HomeJob data={apiData.results} />
                    </div>
                    <ReactPaginate
                        previousLabel={<MdKeyboardArrowLeft />}
                        nextLabel={<MdKeyboardArrowRight />}
                        breakLabel={<MdMoreHoriz />}
                        pageCount={pageTotal}
                        marginPagesDisplayed={'1'}
                        pageRangeDisplayed={'3'}
                        onPageChange={handlePageChange}
                        className='pagination'
                        pageClassName='page-item'
                    />
                </>
            )}
        </div>
    );
};
export default Home;