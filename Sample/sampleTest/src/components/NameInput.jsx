import React, { useRef, useEffect, forwardRef } from 'react';

// Forward ref with proper props management
const NameInput = forwardRef(({ value, onChange }, ref) => {
    return (
        <div>
            <label>Name: </label>
            <input ref={ref} value={value} onChange={onChange} />
        </div>
    );
});

const NameInputWrapper = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the name input when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Pass down props (including value and onChange) correctly
    return <NameInput ref={inputRef} {...props} />;
};

export default NameInputWrapper;
