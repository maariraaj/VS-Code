import React, { createContext, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ formData, setFormData, children }) {
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}
