import React, {StrictMode} from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <StrictMode>
      <App />
  </StrictMode>,
  document.getElementById('root'),
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );