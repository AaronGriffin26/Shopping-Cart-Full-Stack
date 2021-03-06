import React, {Component} from 'react'
import ShoppingCartDataService from "../Service/ShoppingCartDataService";

class AddCart_Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCartId: this.props.match.params.shoppingCartId,
            itemId: '',
            itemQuantity: '',
            itemPrice: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let theCartItems = {
            shoppingCartId: this.state.shoppingCartId,
            itemId: this.state.itemId,
            itemQuantity: this.state.itemQuantity,
            itemPrice: this.state.itemPrice
        }

        ShoppingCartDataService.createCartItem(theCartItems)
            .then(this.props.history.push(`/cartItems/${this.state.shoppingCartId}`))    //I think this should be push to another route
    }

    render() {
        return (
            <div>
                <div>
                    <h3 style={{textAlign: "center"}}>Add Cart Item</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Shopping Cart Id:</label>
                            <input className="form-control" type="text" value={this.state.shoppingCartId} disabled/>
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <input className="form-control" type="text" name="itemQuantity"
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Item Price:</label>
                            <input className="form-control" type="text" name="itemPrice" onChange={this.handleChange}/>
                        </div>
                        <br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddCart_Item
