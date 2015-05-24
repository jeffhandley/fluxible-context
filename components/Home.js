'use strict';
var React = require('react');
var HomeDetail = require('./HomeDetail');

class Home extends React.Component {
    render() {
        // this.context.demonstrate is undefined
        console.log('Home', 'this.context', this.context);

        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
                <HomeDetail />
            </div>
        );
    }
}

// This yields an error about demonstrate not being provided
Home.contextTypes = {
    demonstrate: React.PropTypes.func.isRequired
};

module.exports = Home;
