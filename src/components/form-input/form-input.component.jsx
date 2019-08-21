import React from 'react';

import './form-input.style.scss';

const FormInput = ({ doChange, label, ...otherProps }) => (
    <div className='group'>
        <input 
            className='form-input'
            onChange={doChange}
            {...otherProps}
            />
        {
            label ?
             (<label 
                className={`${otherProps.value.length ? 'shrink' : ''} 
                form-input-label`}>
                {label}
             </label>)
             : null
            
        }
    </div>
);

export default FormInput;