import React from 'react';
import './bootstrap.css';

//import UpdateCart_Item from "./ShoppingCart/UpdateCart_Item";
//import AddCart_Item from "./ShoppingCart/AddCart_Item";

import RouterComponent from "./General/RouterComponent";
import ListShoppingCart from "./ShoppingCart/ListShoppingCart";

function App() {
    return (
        < div
    className = "App" >
        < header
    className = "App-header" >
        < img
    src = {logo}
    className = "App-logo"
    alt = "logo" / >
        < p >
        Edit < code > src / App.js < /code> and save to reload.
        < /p>
        < a
    className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer"
        >
        Learn
    React
    < /a>
    < /header>
    < /div>
)
    ;
}

export default App;
