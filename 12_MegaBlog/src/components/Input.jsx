/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import useId from 'react';

const Input = React.forwardRef( function Input({
    lable,
    type = 'text',
    className = '',
    ...props
}, ref){

    const id = useId()

    return (
        <div className='w-full'>
            {lable && <lable className="inline-block mb-1 pl-1" htmlFor={id}>
                {lable}
                    </lable>
            }
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className} `}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input;
