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
                this.setState({art: json.data});
                console.log(json);
            })
            .then(e =>{
                console.log(e);
            })

    }
    render(){
        let {art} = this.state;
        return (
            <div>
                <h1>首页</h1>
                {art.map((item) => {
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