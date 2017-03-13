import React from 'react';
import Layout from './layout';
class Index extends React.Component{
        render() {
          return (
                 <Layout title={this.props.title}>
                    <div>123</div>
                     <p><img src="/images/img1.jpg"/></p>
                     <script>




                     </script>
                 </Layout>
              )
        }
};
module.exports = Index;
