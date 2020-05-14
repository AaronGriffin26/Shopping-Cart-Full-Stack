import React, {Component} from 'react'
import ListShoppingCart from "../ShoppingCart/ListShoppingCart";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCart_Item from "../ShoppingCart/AddCart_Item";
import UpdateCart_Item from "../ShoppingCart/UpdateCart_Item";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

import LoginComponent from "../Login/LoginComponent";
import SignUpComponent from "../Login/SignUpComponent";





export default class RouterComponent extends Component {
    render() {
        return (

            <Router>
                <HeaderComponent/>
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


                </Switch>
                <FooterComponent/>

            </Router>

        );
    }

}

