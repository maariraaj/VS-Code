import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FormContextProvider } from './components/form-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormContextProvider>
    <App />
  </FormContextProvider>,
)
