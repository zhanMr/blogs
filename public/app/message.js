import React from 'react';
import {Link} from 'react-router';
class Message extends React.Component{
    render(){
        return (
            <div>
                <h1>首页</h1>
                <Link to="/two">文章页</Link>
            </div>
        )
    }
}
export default Message;