import React, { Component } from 'react';

class Welcome extends Component{
    render() {
        return (
            <h3>
                Welcome {this.props.name} a.k.a {this.props.heroName}
            </h3>
        )
    }
}
export default Welcome;