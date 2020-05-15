import React, {Component} from "react";
import ShoppingCartDataService from "../Service/ShoppingCartDataService";

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',//this.props.match.params.userName,  //This is in connection to the routerComponent "/theCustomer
            password: '',
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserNameChange(e) {
        this.setState({userName: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;
        console.log(userName)
        console.log(password)

        let compare = ShoppingCartDataService.getUser(userName).then(response => response.data);
        console.log(compare)
        console.log(compare.password)
        if (compare.password === password)
            this.props.history.push(`/cartItems/${userName}`)
        else
            this.props.history.push(`/cartItems/Aaron`)
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign: "center"}}>Login</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>UserName
                                <input type="text" className="form-control" name="userName"
                                       onChange={this.handleUserNameChange}/>
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Password
                                <input type="password" className="form-control" placeholder="Enter password"
                                       onChange={this.handlePasswordChange}/>
                            </label>
                        </div>

                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}







