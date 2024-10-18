import React, { useReducer } from 'react';
import NameInput from './NameInput'; // Use forwardRef and useRef
import { useFormContext } from './FormProvider';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        default:
            return state;
    }
};

const FormReducer = () => {
    const { formData, setFormData } = useFormContext();
    const [formState, dispatch] = useReducer(formReducer, formData);

    const updateFormData = (type, value) => {
        dispatch({ type, payload: value });
        setFormData((prev) => ({ ...prev, [type.toLowerCase()]: value }));
    };

    return (
        <div>
            <NameInput
                value={formState.name || ''}
                onChange={(e) => updateFormData('SET_NAME', e.target.value)}
            />
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={formState.email || ''}
                    onChange={(e) => updateFormData('SET_EMAIL', e.target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                    type="password"
                    value={formState.password || ''}
                    onChange={(e) => updateFormData('SET_PASSWORD', e.target.value)}
                />
            </div>
        </div>
    );
};

export default FormReducer;
