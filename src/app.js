import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { myAction2, myAction } from './actions/actions';
import AppRouter, { history } from './routers/AppRouter';

const store = configureStore();

console.log(store.dispatch(myAction()));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// console.log(store.dispatch(myAction2()));

ReactDOM.render(jsx, document.getElementById('app'));
