import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from './Post.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
              <App />
              <Post />
              <App />
              <Post />
            </React.StrictMode>);
