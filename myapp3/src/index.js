import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import App4 from './App4';
import App5 from './components/App5';
import dypcet from './pages/dypcet';
import reportWebVitals from './reportWebVitals';
import App2 from './pages/dypcet';
import App6 from './pages/dypcet2';

//hi i am ankit 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   {/* <App1 /> */}
   {/* <App4 /> */}
   <App2 />
     {/* <App5/>  */}
     {/* <App6/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
