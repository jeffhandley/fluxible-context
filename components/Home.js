'use strict';
var React = require('react');

class Home extends React.Component {
    render() {
        // this.context.demonstrate is undefined
        console.log('Home', 'this.context', this.context);

        // this.props.context is undefined
        console.log('Home', 'this.props.context', this.props.context);

        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
            </div>
        );
    }
}

// This yields an error about demonstrate not being provided
Home.contextTypes = {
    demonstrate: React.PropTypes.func.isRequired
};

module.exports = Home;
