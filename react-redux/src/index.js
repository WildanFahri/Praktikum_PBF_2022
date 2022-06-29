// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import MainReducer from './reducers/MainReducer'; 
// import Table from './containers/Table';
// import CreateTodo from './containers/CreateTodo';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const store = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore)(MainReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <CreateTodo />
//     <Table/>
//   </Provider>,
//   document.getElementById('root'));
// // registerServiceWorker();

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './containers/Table';
import CreateTodo from './containers/CreateTodo';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
f)(createStore)(MainReducer)
ReactDOM.render(<Provider store={store}>
<CreateTodo/>
<Table/>
</Provider>
, document.getElementById('root'));
reportWebVitals();
