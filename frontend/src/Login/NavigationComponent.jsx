import React, {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link id="login" to="/sign-in">Log In</Link>
                <Link id="sign-up" to="/sign-up">Sign Up</Link>
            </BrowserRouter>
        );
    }
}