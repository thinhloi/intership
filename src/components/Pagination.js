import MdKeyboardArrowLeft from "react-icons/md"
import MdKeyboardArrowRight from "react-icons/md"
import MdMoreHoriz from "react-icons/md"
import ReactPaginate from 'react-paginate';

export const Pagination = ({ onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={<MdKeyboardArrowLeft />}
            nextLabel={<MdKeyboardArrowRight />}
            breakLabel={<MdMoreHoriz />}
            pageCount={'400'}
            marginPagesDisplayed={'1'}
            pageRangeDisplayed={'3'}
            onPageChange={onPageChange}
            containerClassName='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
        />
    );
};