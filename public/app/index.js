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
        fetch('/', {
        method: 'post',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(json => json.json())
        .then(json => {
            store.list = json.data;
        })
        .then(e =>{
            console.log(e);
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