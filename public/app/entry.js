import React from 'react';
import ReactDom from 'react-dom';
import {Router , Route, browserHistory} from 'react-router';
import Store from './store';
import Index from './index';
import Message from './message';

const store = new Store();

//路由配置
const routerConfig = [
    {path: '/', component: Index},
    {path: '/message', component: Message}
];

ReactDom.render((
  <Router history={browserHistory}>
      <Route path="/"  component={Index}></Route>
      <Route path="/message"  component={Message}></Route>
  </Router>
), document.getElementById('JS_APP'));


