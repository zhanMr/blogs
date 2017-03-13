import React from 'react';
import ReactDom from 'react-dom';
import {Router , browserHistory} from 'react-router';

import Index from './index';
import Message from './message';


//路由配置
const routerConfig = [
    {path: '/', component: Index},
    {path: '/message', component: Message}
];
ReactDom.render(<Router history={browserHistory} routes={routerConfig}></Router>, document.getElementById('JS_APP'));

