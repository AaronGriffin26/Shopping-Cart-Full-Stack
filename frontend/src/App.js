import React from 'react';
import './bootstrap.css';
import './App.css';
//import WelcomeComponent from "./General/WelcomeComponent";
//import RouterComponent from "./General/RouterComponent";
import RouterComponent from "./General/RouterComponent";
import NavigationComponent from "./Login/NavigationComponent";

//import ListShoppingCart from "./ShoppingCart/ListShoppingCart";
import LoginComponent from "./Login/LoginComponent";
import SignUpComponent from "./Login/SignUpComponent";

function App() {
    return (


        <div className="container">
            <div id="page-wrapper">
                <header>
                    <div className="top-navigation">
                        AGC Grocery<br/>
                        <NavigationComponent/>
                    </div>
                </header>
                <RouterComponent/>
               {/* <LoginComponent/>  //will map both login and sign-up through routerComponent tomorrow right now they are separate components*/}
               {/*<SignUpComponent/>*/}
            </div>
          <footer>
              Website by Aaron Griffin and Carmen Smith. Backend by Gaurav Nain. Database by Carmen Smith.
           </footer>
        </div>
    );
}

export default App;
