import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render( 
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact /> 
    <Route component={()=>(<div> <h1>Página 404</h1> </div>)}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
