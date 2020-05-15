import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div className="jumbotron" style={{textAlign: "center", backgroundColor: "black"}}>
                    <h1 style={{color: "Orange"}}>Welcome {this.state.name}, to AGC GROCERY!</h1>
                    <br/>
                    <h2 style={{color: "white"}}>Login to manage your Shopping Cart <Link to="/sign-in">here</Link></h2>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent;