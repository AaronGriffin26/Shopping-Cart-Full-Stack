import React from 'react';
import './bootstrap.css';
//import LoginComponent from "./Login/LoginComponent";
import SignUpComponent from "./Login/SignUpComponent";
import RouterComponent from "./General/RouterComponent";

//import ListShoppingCart from "./ShoppingCart/ListShoppingCart";

function App() {
    return (
         < div className="container">
             < RouterComponent/>
         </div>
        //<LoginComponent/>  will map both login and sign-up through routerComponent tomorrow right now they are separate components
        //<SignUpComponent/>
    );
}

export default App;
