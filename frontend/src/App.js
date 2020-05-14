import React from 'react';
import './bootstrap.css';
import './App.css';
import RouterComponent from "./General/RouterComponent";
import NavigationComponent from "./Login/NavigationComponent";

//import ListShoppingCart from "./ShoppingCart/ListShoppingCart";

function App() {
    return (
        <body>
        <div class="container">
            <div class="col-md-12">
                <header>
                    <div class="top-navigation">
                        AGC Grocery<br/>
                        {/*<NavigationComponent/>*/}
                    </div>
                </header>
                <div id="page-wrapper">
                    <RouterComponent/>
                </div>
                {/*<LoginComponent/>  will map both login and sign-up through routerComponent tomorrow right now they are separate components*/}
                {/*<SignUpComponent/>*/}
                <footer>
                    Website by Aaron Griffin and Carmen Smith. Backend by Gaurav Nain. Database by Carmen Smith.
                </footer>
            </div>
        </div>
        </body>
    );
}

export default App;
