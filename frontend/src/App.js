import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import ItemsPage from './components/ItemsPage';
import CartPage from './components/CartPage';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
    return (
        <body>
        <BrowserRouter>
            <header>
                <div class="top-navigation">
                    Generic Shop Site<br/>
                    <Link to="/">Home</Link>
                    <Link to="/browse">Browse</Link>
                    <Link id="login" to="/login">Log In</Link>
                </div>
            </header>
            <div id="page-wrapper">
                <Route path="/" component={App}>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/browse" component={ItemsPage}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/confirm" component={ConfirmationPage}/>
                </Route>
            </div>
            <footer>
                Website by Aaron Griffin and Carmen Smith. Backend by Gaurav Nain. Database by Carmen Smith.
            </footer>
        </BrowserRouter>
        </body>
    );
}

export default App;
