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
  const btnVariant = variant ? `btn-${variant}` : '';
  const btnSize = size ? `btn-${size}` : '';
  const btnColor = color ? `btn-${color}` : '';
  const btnDisabled = disabled ? "btn-disabled" : '';
  const btnDisableShadow =  disableShadow ? "btn-disableShadow" : '';
  return (
    <button className ={`${btnVariant} ${btnSize} ${btnColor} ${btnDisabled} ${btnDisableShadow} ${className}`} {...btnProps}
      disable = {disabled}
      disableShadow= {disableShadow}
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

