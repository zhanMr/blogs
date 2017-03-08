let React = require('react');
let Layout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  </head>
                <body>
                    {this.props.children}
                    <script src="/javascripts/libs.min.js"></script>
                    <script src="/javascripts/app.js"></script>
                </body>
            </html>
        )
    }
});
module.exports = Layout;
