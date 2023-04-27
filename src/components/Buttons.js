

export const Button = ({ text, onClick, endIcon, ...props }) => {
  return (
    <button
      className='btn-text'
      type='button'
      onClick={onClick}
      {...props}
    >
      {text}
      <span className='endIcon'>{endIcon}</span>
    </button>
  )
}

