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


export default class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"><WelcomeComponent name="Customer"/></Route>
{/*
pending route.. will complete Thursday
                                <Route exact path='/' component={LoginComponent}/>
                                <Route path="/sign-in" component={LoginComponent}/>
                                <Route path="/sign-up" component={SignUpComponent}/>
*/}

                    <Route  path="/" exact component={LoginComponent}/>
                    <Route path="/theCustomer" exact component={LoginComponent}/>
                    <Route path="/theCustomer" exact component={ListShoppingCart}/>

                    {/*<Route path="/" exact component={ListShoppingCart}/>*/}
                    {/*<Route path="/cartItems" exact component={ListShoppingCart}/>*/}
                    {/*<Route path="/cartItems/:shoppingCartId" component={AddCart_Item}/>*/}
                    {/*<Route path="/cartUpdate/:shoppingCartId" component={UpdateCart_Item}/>*/}


                    <Route path="/sign-in" component={LoginComponent}/>
                    <Route path="/sign-up" component={SignUpComponent}/>
                    <Route path="/cartItems" exact component={ListShoppingCart}/>
                    <Route path="/cartItems/:shoppingCartId" component={AddCart_Item}/>
                    <Route path="/cartUpdate/:shoppingCartId" component={UpdateCart_Item}/>
                    <Route path="/confirm/:shoppingCartId" exact component={CartConfirmation}/>
                    <Route path="/finish" exact component={CartFinish}/>
                </Switch>
            </div>
        );
    }
}

