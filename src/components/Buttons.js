

export const Button = ({ text, onClick, endIcon, ...props }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      {...props}
    >
      {text}
      <span className='endIcon'>{endIcon}</span>
    </button>
  )
}

