export const Quote= ( {index, text}) => {
    return (
        <div className="quote-list">
            <div className = "quote-edit"></div>
            <blockquote
                key={index}
                className="quote-content"
            >
                {text}
            </blockquote>
        </div>
    )
}