'use strict';
var React = require('react');

class HomeDetail extends React.Component {
    render() {
        // this.context.demonstrate is undefined
        console.log('HomeDetail', 'this.context', this.context);

        return (
            <div>
                <h3>HomeDetail</h3>
                <p>Detailed child component!</p>
            </div>
        );
    }
}

HomeDetail.contextTypes = {
    demonstrate: React.PropTypes.func.isRequired
};

module.exports = HomeDetail;
