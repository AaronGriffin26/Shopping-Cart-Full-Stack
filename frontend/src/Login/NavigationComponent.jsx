import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        let loginOptions;
        if (false)// logged in
            loginOptions = (
                <div id="login">
                    <Link to="/log-out">Log Out</Link>
                </div>
            );
        else
            loginOptions = (
                <div id="login">
                    <Link to="/sign-in">Log In</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            );
        return (
            <div>
                <Link to="/">Home</Link>
                {loginOptions}
            </div>
        );
    }
}