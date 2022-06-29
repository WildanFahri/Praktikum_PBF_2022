import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lifecycle from './Lifecycle';
import HelloComponent from './component/HelloComponent';
import Login from './login/login';
import BlogPost from './container/BlogPost/BlogPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const HelloComponent = () => {
//   return HelloComponent;
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>StateFullComponent</p>
//   }
// }

ReactDOM.render(<BlogPost/>, document.getElementById('content'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
