import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import ItemsPage from './components/ItemsPage';
import CartPage from './components/CartPage';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
    return (
        <body>
        <header>
            Generic Shop Site
        </header>
        <BrowserRouter>
            <div id="page-wrapper">
                <Route path="/" component={App}>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/browse" component={ItemsPage}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/confirm" component={ConfirmationPage}/>
                </Route>
            </div>
        </BrowserRouter>
        <footer>
            Website by Aaron Griffin. Backend by Gaurav Nain. Database and assistance by Carmen Smith.
        </footer>
        </body>
    );
}

export default App;
