import React, { useState } from 'react';
import { FormProvider } from './components/FormProvider';
import FormReducer from './components/FormReducer';
import FormValidation from './components/FormValidation';
import DerivedNameLength from './components/DerivedNameLength';
import SubmitForm from './components/SubmitForm';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <FormProvider formData={formData} setFormData={setFormData}>
      <div className="App">
        <h2>Form Project with Multiple Components and Hooks</h2>
        <FormReducer />
        <FormValidation />
        <DerivedNameLength />
        <SubmitForm />
        {formData.name && (
          <div>
            <h3>Submitted Data</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
          </div>
        )}
      </div>
    </FormProvider>
  );
}

export default App;
