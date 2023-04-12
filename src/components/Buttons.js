import React from 'react';


function Button({ variant, children, startIcon, endIcon, ...props }) {
  const classNames = `button ${variant}`;
  return (
    <div>
    <button className={classNames} {...props}>      
      {startIcon && startIcon }
      {children}
      {endIcon && endIcon}
    </button>
    </div>
  );
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

