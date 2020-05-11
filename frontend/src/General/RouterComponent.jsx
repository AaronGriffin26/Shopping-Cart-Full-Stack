import React, {Component} from 'react'
import ListShoppingCart from "../ShoppingCart/ListShoppingCart";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddCart_Item from "../ShoppingCart/AddCart_Item";
import UpdateCart_Item from "../ShoppingCart/UpdateCart_Item";




export default class RouterComponent extends Component {
    render(){
        return (
            <Router>
                <>
                    <h1>Shopping Cart Application</h1>
                    <Switch>
                    <Route path = "/" exact component = {ListShoppingCart} />
                    <Route path = "/cartItems" exact component = {ListShoppingCart} />
                    <Route path = "/cartItems/:shoppingCartId" component = {AddCart_Item} />
                    <Route path = "/cartUpdate/:shoppingCartId" component = {UpdateCart_Item} />
                    </Switch>
                    </>
            </Router>
        )
    }



}