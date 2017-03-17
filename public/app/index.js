import React from 'react';
import {Link} from 'react-router';
import {observer} from 'mobx-react';
import Store from './store';
const store = new Store();

@observer
class Index extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        function f(url, data){
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if(xhr.readyState == 4){
                        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                            resolve(xhr.status);
                        }else{
                            resolve(xhr.status);
                        }
                    }
                }
                xhr.open('post', url, true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(data);
            })
        }
        let getM = async (url, data) => {
            try{
              //resolve
              let result = await f(url, data);
              store.list = result.data;
            }catch(e){
                //reject
                console.log('catch', e);
            }
        }
        getM('/', null);
        fetch('/', {
        method: 'post',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(json => json.json())
        .then(json => {
            //store.list = json.data;
        })
        .then(e =>{
            //console.dir(e);
        })
    }
    render(){
        return (
            <div>
                <h1>首页</h1>
                {store.list && store.list.map((item) => {
                    return (
                        <article key={item.id}>
                            <h3><Link>{item.title}</Link></h3>
                            <p>{item.introduction}</p>
                        </article>
                    )
                })}
                <Link to="/two">跳转</Link>
            </div>
        )
    }
}
export default Index;
