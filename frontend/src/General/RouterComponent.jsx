import React, {Component} from 'react'
import ListShoppingCart from "../ShoppingCart/ListShoppingCart";
import Route from "react-router-dom/es/Route";
import AddCart_Item from "../ShoppingCart/AddCart_Item";
import Router from "react-router-dom/es/Router";
import Switch from "react-router-dom/es/Switch";



export default class RouterComponent extends Component {
    render(){
        return (
            <Router>
                <>
                    <h1>Shopping Cart Application</h1>
                    <Switch>
                    <Route path = "/" exact component = {ListShoppingCart} />
                    <Route path = "/cartItems" exact component = {ListShoppingCart} />
                    <Route path = "/ cartItems/:shoppingCartId" component = {AddCart_Item} />
                    </Switch>
                    </>
            </Router>
        )
    }



}