import React, {Component} from "react";
import ShoppingCartDataService from "../Service/ShoppingCartDataService";


export default class SignUpComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',//this.props.match.params.userName,  //This is in connection to the routerComponent "/theCustomer
            password: ''                                      // I will remove the "//" once routing is corrected in routercompt
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
        e.preventDefault()
        let theCustomer = {
            userName: this.state.userName,
            password: this.state.password
        }

        ShoppingCartDataService.getUser(theCustomer.userName).then(response => {
            let compare = response.data;
            if (compare.password === null)
                ShoppingCartDataService.createUser(theCustomer)
                    .then(() => this.props.history.push(`/cartItems/${theCustomer.userName}`))
            else
                console.log("Username already exists!")
        }).catch(error => {
            if (error.response.status === 500)
                ShoppingCartDataService.createUser(theCustomer)
                    .then(() => this.props.history.push(`/cartItems/${theCustomer.userName}`))
        });
    }


    render() {
        return (
            <div>
                <h3 style={{textAlign: "center"}}>Sign Up</h3>

                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>UserName</label>
                            <input className="form-control" type="text" name="userName"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password"
                                   onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}

