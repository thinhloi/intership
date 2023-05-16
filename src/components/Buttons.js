

export const Button = ({ text, onClick, endIcon,...props}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      {...props}
    >
      {text}
      {endIcon && <span className='end-icon'>{endIcon}</span>}
    </button>
  )
}

