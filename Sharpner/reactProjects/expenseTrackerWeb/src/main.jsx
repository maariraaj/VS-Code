import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import { ExpenseContextProvider } from './exp-context/expense-context.jsx'
import { Provider } from 'react-redux';
import store from './store/index.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ExpenseContextProvider>
//     <App />
//   </ExpenseContextProvider>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
