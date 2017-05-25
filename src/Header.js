import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            name: "UnLike",
            count: 0
        }
    }

    render(){
        return (
            <div>
                <h1>Montri Studio Tutorial</h1>
                <h2>{ this.state.name }</h2>
                <h2>{ this.state.count }</h2>
            </div>
        )
    }
}

export default Header