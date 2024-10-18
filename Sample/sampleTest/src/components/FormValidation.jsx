import React, { useEffect, useState } from 'react';
import { useFormContext } from './FormProvider';

const FormValidation = () => {
    const { formData } = useFormContext();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const { name, email, password } = formData;
        if (name && email.includes('@') && password.length > 5) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [formData]);

    return <p>{isValid ? 'Form is valid' : 'Form is invalid'}</p>;
};

export default FormValidation;
