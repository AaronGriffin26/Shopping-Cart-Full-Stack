import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import ListShoppingCart from "../ShoppingCart/ListShoppingCart";
import AddCart_Item from "../ShoppingCart/AddCart_Item";
import UpdateCart_Item from "../ShoppingCart/UpdateCart_Item";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "../Login/LoginComponent";
import SignUpComponent from "../Login/SignUpComponent";
import CartConfirmation from "../ShoppingCart/CartConfirmation";
import CartFinish from "../ShoppingCart/CartFinish";
import CustomerComponent from "../Login/CustomerComponent";


export default class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"><WelcomeComponent name="Customer"/></Route>
                    <Route path="/sign-in" component={LoginComponent}/>
                    <Route path="/sign-up" component={SignUpComponent}/>
                    <Route path="/theCustomer/:userName" exact component={CustomerComponent}/>
                    <Route path="/cartItems/:shoppingCartId" exact component={ListShoppingCart}/>
                    <Route path="/addItem/:shoppingCartId" component={AddCart_Item}/>
                    <Route path="/cartUpdate/:itemId" component={UpdateCart_Item}/>
                    <Route path="/confirm/:shoppingCartId" exact component={CartConfirmation}/>
                    <Route path="/finish" exact component={CartFinish}/>
                </Switch>
            </div>
        );
    }
}

