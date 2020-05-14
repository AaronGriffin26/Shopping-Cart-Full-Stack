import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ListShoppingCart from "../ShoppingCart/ListShoppingCart";
import AddCart_Item from "../ShoppingCart/AddCart_Item";
import UpdateCart_Item from "../ShoppingCart/UpdateCart_Item";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "../Login/LoginComponent";
import SignUpComponent from "../Login/SignUpComponent";


export default class RouterComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <HeaderComponent/>
                <Switch>
                    <Route exact path="/"><WelcomeComponent name="Customer"/></Route>

                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                            <div className="container">
                                <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <Route exact path='/' component={LoginComponent}/>
                                <Route path="/sign-in" component={LoginComponent}/>
                                <Route path="/sign-up" component={SignUpComponent}/>
                            </div>
                        </div>
                    </div>

                    <Route path="/" exact component={ListShoppingCart}/>
                    <Route path="/cartItems" exact component={ListShoppingCart}/>
                    <Route path="/cartItems/:shoppingCartId" component={AddCart_Item}/>
                    <Route path="/cartUpdate/:shoppingCartId" component={UpdateCart_Item}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

