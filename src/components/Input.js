import React from 'react'


export const Input = ({ action,index, startIcon,onChange, ...props})=> {
    return (
        <div className='input-group'>
        <input
                type='text'
                onChange = {onChange}
                {...props}
        />
        {startIcon && <span className='start-icon'>{startIcon}</span>}
        </div>
        );
};
