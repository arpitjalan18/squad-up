import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Listed from './Listed.js'
import Filterer from './Filterer.js'
import Room from './Room.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";  
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Listed}/>
      <Route path = "/create" component = {Filterer}/>
      <Route path = "/list" component = {Listed}/>
      <Route path = "/room/:id/" component = {Room}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);