import {MdPublic} from "react-icons/md"
import {MdAccessTime} from "react-icons/md"

export const JobInfo = ({title}) => {
    return <div className="job">{title}</div>
}

export const JobLocation =({title}) => {
    return (
        <>
            <div className="job-location">
                <MdPublic />
                <span>{title}</span>
            </div>
        </>
    )
}
export const JobPostTime =({title}) => {
    return (
        <>
            <div className="job-time">
                <MdAccessTime />
                <span>{title}</span>
            </div>
        </>
    )
}
