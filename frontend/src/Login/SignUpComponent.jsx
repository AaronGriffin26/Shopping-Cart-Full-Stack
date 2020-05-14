import React, {Component} from "react";
import ShoppingCartDataService from "../Service/ShoppingCartDataService";


export default class SignUpComponent extends Component {


        constructor(props) {
            super(props)
            this.state = {
                userName: '',//this.props.match.params.userName,  //This is in connection to the routerComponent "/theCustomer
                password: '',                                       // I will remove the "//" once routing is corrected in routercompt


            }
            this.handleSubmit = this.handleSubmit.bind(this)

        }

        handleSubmit()
        {
            let theCustomer = {
                userName: this.state.userName,
                password: this.state.password,

            }

            ShoppingCartDataService.createUser(theCustomer)
                .then(() => this.props.history.push('/theCustomer'))
        }



        render() {
            return (
                <div>
                    <h3 style={{textAlign: "center"}}>Sign Up</h3>

                    <div className="container">
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label>UserName</label>
                                <input className="form-control" type="text" name="userName"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password"/>
                            </div>

                            <button className="btn btn-primary btn-block" onClick={()=> this.props.history.push('/cartItems')}>Submit</button>
                        </form>
                    </div>
                </div>
            )
        }

    }

