import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message : "Welcom to my house"
        }
    }

    changeMessage(){
        this.setState({
            message : "tank you for your subscribing"
        })
    }

    render() {
        return (
            <div>  
                <h3>
                    {this.state.message}
                </h3>
                <button onClick={() => this.changeMessage}>Subscibe</button>
            </div>
        )
    }
}
export default Message;