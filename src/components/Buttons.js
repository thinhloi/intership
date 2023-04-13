import React from 'react';


// function Button({ variant,size,color, children, startIcon, endIcon, ...props }) {
//   const classNames = `button-${variant} button-${size} button-${color}`;
//   return (
//     <div>
//     <button className={classNames} {...props}>      
//       {startIcon && startIcon }
//       {children}
//       {endIcon && endIcon}
//     </button>
//     </div>
//   );
// }
const Button = (props) => {
  const {
    text,
    variant = '',
    color ='',
    size ='',
    disabled = false,
    startIcon,
    endIcon,
    disableShadow,
    className='',
    ...btnProps
  } = props;

  return (
    <button className = {`btn btn${variant} btn-${size} btn-${color} ${disabled ? "btn-disabled" : ''} 
    ${disableShadow ? "btn-disableShadow" : ''} ${className}`} {...btnProps}
      disable = {disabled}
      color={color}
      size={size}>
        {startIcon && (<startIcon className ='start-icon'>{startIcon}</startIcon>)}
        {text}
        {endIcon && (<endIcon className ='end-icon'>{endIcon}</endIcon>)}
      </button>

  )
}


export default Button;







// import PropTypes from 'prop-types';

// Button.propTypes = {
//   variant: PropTypes.oneOf(['primary', 'outline', 'text']),
//   children: PropTypes.node.isRequired,
// };

// Button.defaultProps = {
//   variant: 'primary',
// };

