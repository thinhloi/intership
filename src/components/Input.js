import React from 'react'


export const Input = ({ action,index, startIcon, onChange, ...props})=> {
    return (
        <div className='input-group'>
        <span className='start-icon'>{startIcon}</span>
        <input
                type='text'
                onChange = {onChange}
                {...props}
        >
        </input>
        </div>
        );
};
