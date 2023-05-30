import React from 'react';

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


