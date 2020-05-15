import React, {Component} from "react";
import ShoppingCartDataService from "../Service/ShoppingCartDataService";

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;
        console.log(userName)
        console.log(password)

        ShoppingCartDataService.getUser(userName).then(response => {
            let compare = response.data;
            if (compare.password === password)
                this.props.history.push(`/cartItems/${userName}`)
            else
                console.log("Incorrect password")
        });
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
                                       onChange={this.handleChange}/>
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Password
                                <input type="password" className="form-control" placeholder="Enter password"
                                       name="password"
                                       onChange={this.handleChange}/>
                            </label>
                        </div>

                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}







