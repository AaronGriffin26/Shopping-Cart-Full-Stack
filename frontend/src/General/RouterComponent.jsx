import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom';
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
            <div>
                <Switch>
                    <Route exact path="/"><WelcomeComponent name="Customer"/></Route>
                    <Route path="/sign-in" component={LoginComponent}/>
                    <Route path="/sign-up" component={SignUpComponent}/>
                    <Route path="/cartItems" exact component={ListShoppingCart}/>
                    <Route path="/cartItems/:shoppingCartId" component={AddCart_Item}/>
                    <Route path="/cartUpdate/:shoppingCartId" component={UpdateCart_Item}/>
                </Switch>
            </div>
        );
    }
}

