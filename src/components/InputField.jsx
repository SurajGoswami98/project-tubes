// import React from 'react';

const InputField = ({ label, name, type }) => {
    return (
        <>
            <div className="flex flex-col mb-5">

                <label htmlFor={name} className="text-xs font-medium uppercase mb-2">{label}</label>
                <input type={type} id={name} name={name} className="border px-3 py-2 rounded-sm" />
            </div>

        </>
    );
};

export default InputField;
