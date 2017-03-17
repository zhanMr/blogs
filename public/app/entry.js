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

/*
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('ok');
        }, time);
    })
};
var start = async function () {
    try{
        // 在这里使用起来就像同步代码那样直观
        console.log('start');
        let result = await sleep(3000);
        console.log(result);
        let result2 = await sleep(1500);
        console.log(result2);
    }catch(err){
        console.log(err);
    }

};
start();
console.log('后面的事情');*/
