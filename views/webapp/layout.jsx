import React from 'react';
class Layout extends React.Component{
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" type="text/css" href="/css/webapp.css?v=20170310"/>
                </head>
                <body>
                    {this.props.children}
                    <div id="JS_APP"></div>

                    <script src="/js/app/app.js"></script>
                </body>
            </html>
        )
    }
};
module.exports = Layout;
