import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerSeviceWorker'
import 'bootstrap/dist/css/bootstrap.css';
// import Counter2 from './components/counter2';
import 'font-awesome/css/font-awesome.css';
import Movies from './components/movies';


ReactDOM.render(
  <React.StrictMode>
    <main className="container">
      <Movies></Movies>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();