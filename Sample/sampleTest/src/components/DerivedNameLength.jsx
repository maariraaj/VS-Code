import React, { useMemo } from 'react';
import { useFormContext } from './FormProvider';

const DerivedNameLength = () => {
    const { formData } = useFormContext();
    const nameLength = useMemo(() => {
        return (formData.name || '').length;
    }, [formData.name]);

    return <p>Name Length (calculated with useMemo): {nameLength}</p>;
};

export default DerivedNameLength;
