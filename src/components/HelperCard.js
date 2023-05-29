export const HelperCard = ({ title }) => {
    return (
        <div className='helper-card'>
            <p>{title}</p>
            <p>
                Please email a copy of your resume and online portfolio to
                <a href="mailto:wes@kasisto.com"> wes@kasisto.com </a> & CC <a href="mailto:eric@kasisto.com">eric@kasisto.com</a>
            </p>
        </div>
    );
};