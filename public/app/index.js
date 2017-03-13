import React from 'react';
import {Link} from 'react-router';
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            art: []
        }
    }
    componentDidMount(){
        fetch('/', {method: 'post'})
            .then(json => json.json())
            .then(json => {
                console.log(json);
            })
            .then(e =>{
                console.log(e);
            })

    }
    render(){
        return (
            <div>
                <h1>首页</h1>
                <Link to="/two">跳转</Link>
            </div>
        )
    }
}
export default Index;