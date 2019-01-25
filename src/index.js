import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import { BrowserRouter , Route} from "react-router-dom";
import Login from './Component/Login'
import AppBars from './Component/Appbar'
import * as serviceWorker from './serviceWorker';
import promiseMiddleware from 'redux-promise';
import rootreducer from './Reducer'
import Check from './Component/Check'
import Aboutus from './Component/Aboutus'


const createStorewithmiddleware = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
   <Provider store={createStorewithmiddleware(rootreducer)}>
<BrowserRouter>
<div>
<AppBars/>
  <Route exact path ='/Login' component={Login}/>
  <Route exact path ='/' component={App}/>
  <Route exact path ='/checkout' component={Check}/>
  <Route exact path ='/Aboutus' component={Aboutus}/>
</div>
</BrowserRouter>
</Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
