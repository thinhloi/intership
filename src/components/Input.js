import React from 'react'

const Input = (props) => {
    const {
        type ,
        error,
        disabled,
        disableShadow,
        helperText ,
        startIcon,
        endIcon,
        size ,
        fullWidth,
        multiline_row ,
        onChange,
        label,
        placeholder,
        value,
        ...inputProps
    } = props
    const inputError = error ? 'inputField input-error' : 'inputField';
    const inputSize = size ? `input-${size}` : '';
    const isFullWidth = fullWidth ? `input-fullWidth` : '';
    const isMultiline_row = multiline_row ? `input multiline-row` : '';


    let divClassName = `${inputError} ${isFullWidth}`;

    if (isMultiline_row)
    {
        return(
        <div className = {divClassName}>
            <label>{label}</label>
            <div className='input-area'>
                <textarea
                    size={size}
                    disabled={disabled}
                    helperText={helperText}
                    className={inputSize}
                    placeholder ={placeholder}
                    {...inputProps}
                >
                </textarea>
            </div>
            <p className='helper-text' >{helperText}</p>
        </div>
        )
    }
    else {
        return (
        <div className ={divClassName}>
            
            <div className='input-area'>
            <p className = 'helper-text' >{helperText}</p>
            
            {startIcon && (
            <startIcon className ='start-icon'>{startIcon}</startIcon>
            )}
              
            <input 
                type='text'
                className={`${inputSize}` }
                helperText={helperText}
                placeholder = {placeholder}
                disabled={disabled}
                size={size}
                value= {value}
                {...inputProps}
                />
            {endIcon && (
                        <endIcon className='end-icon'>{endIcon}</endIcon>
                    )}
                <label>{label}</label>
            </div>
            
        </div>
        )
    }
}




export default Input