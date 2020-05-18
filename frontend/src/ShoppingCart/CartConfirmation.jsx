import React, {Component} from 'react'
import ShoppingCartDataService from "../Service/ShoppingCartDataService"


export default class CartConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCartId: this.props.match.params.shoppingCartId,
            list: [],
            message: null
        }
        this.refreshShoppingCart = this.refreshShoppingCart.bind(this)
        this.goBackToCart = this.goBackToCart.bind(this)
        this.purchaseClicked = this.purchaseClicked.bind(this)
    }

    componentDidMount() {
        this.refreshShoppingCart();
    }

    refreshShoppingCart() {
        ShoppingCartDataService.retrieveAllCartItems()
            .then(
                response => {
                    console.log(response);
                    this.setState({list: response.data})
                }
            )
    }

    goBackToCart(e) {
        e.preventDefault()
        this.props.history.goBack();
    }

    purchaseClicked(e) {
        e.preventDefault()
        ShoppingCartDataService.purchaseShoppingCart()     //pending rest http links reason for underline error... will change once completed
            .then(() => this.props.history.push('/finish'));
    }

    render() {
        return (
            <div className="container">
                <h2 style={{textAlign: "center"}}>Cart Items</h2>
                <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
                    <table className="table">
                        <thead>
                        <tr style={{textAlign: "center", color: "pink"}}>
                            <th>Item Id</th>
                            <th>Quantity</th>
                            <th>Item Price</th>
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map(    //allow you to loop through a list of items and define how each item should be displayed
                                list => {
                                    if (list.shoppingCartId - this.state.shoppingCartId > -0.1 && list.shoppingCartId - this.state.shoppingCartId < 0.1) {
                                        return (
                                            <tr style={{textAlign: "center"}} key={list.itemID}>
                                                <td>{list.itemID}</td>
                                                <td>{list.itemQuantity}</td>
                                                <td>{list.itemPrice}</td>
                                                <td>{list.itemQuantity * list.itemPrice}</td>
                                            </tr>
                                        )
                                    }
                                }
                            )
                        }
                        </tbody>
                    </table>
                    <div style={{textAlign: "right"}}>
                        Total: <b style={{"font-size": "18pt"}}>
                        {this.state.list.map(list => {
                            if (list.shoppingCartId - this.state.shoppingCartId > -0.1 && list.shoppingCartId - this.state.shoppingCartId < 0.1) {
                                return list.itemQuantity * list.itemPrice;
                            }
                            return 0;
                        }).reduce((a, b) => a + b, 0)}</b>
                    </div>
                    <div className="row">
                        <br/>
                        <button className="btn btn-success" onClick={this.goBackToCart}>Modify</button>
                        <button className="btn btn-success" onClick={this.purchaseClicked}>Purchase</button>
                    </div>
                </div>
            </div>
        )
    }
}


            
