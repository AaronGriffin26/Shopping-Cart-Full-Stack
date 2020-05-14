import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link id="login" to="/sign-in">Log In</Link>
                <Link id="sign-up" to="/sign-up">Sign Up</Link>
            </div>
        );
    }
}