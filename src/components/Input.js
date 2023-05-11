import React from 'react'
import {StyledButton as Button} from './Buttons'
import { MdDeleteOutline } from "react-icons/md";

export const StyledCheckbox = ({ id, label, checked, onChange, ...prop }) => {
    return (
        <>
            <input
                type='checkbox'
                checked={checked}
                onChange={onChange}
                id={id}
                {...prop} />
            <label
                htmlFor={id}
                data-content={label}
            >
                {label}
            </label>
        </>
    );
};

export const Todo = ({ id, label, checked, onClick, onChange, ...prop }) => {
    return (
        <div className='checkbox-group'>
            <StyledCheckbox
                className='checkbox-combo'
                type='checkbox'
                label={label}
                checked={checked}
                onChange={onChange}
                id={id}
                {...prop}
            />
            {prop.showDeleteIcon && <Button
                className='btn-icon-danger'
                onClick={onClick}
                text={<MdDeleteOutline />}
            />}
        </div>
    );
};

export const StyledInputText = ({ action,index, onChange, ...props})=> {
    return (
        <input
                type='text'
                // onChange={() => action[index]}
                onChange = {onChange}
                {...props}
        >   
        </input>
        );
};
