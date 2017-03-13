import React from 'react';
import Layout from './layout';
class Index extends React.Component{
        render() {
            return (
                 <Layout title={this.props.title}>
                    123123
                 </Layout>
              )
        }
};
module.exports = Index;
