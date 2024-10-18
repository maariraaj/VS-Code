import React, { useCallback } from 'react';
import { useFormContext } from './FormProvider';

const SubmitForm = () => {
    const { formData } = useFormContext();

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            const { name, email, password } = formData;

            if (name && email.includes('@') && password.length > 5) {
                alert('Form submitted successfully!');
                console.log('Submitted Data:', formData);
            } else {
                alert('Please complete the form before submitting');
            }
        },
        [formData]
    );

    return (
        <div>
            <button onClick={handleSubmit}>Submit Form</button>
        </div>
    );
};

export default SubmitForm;
