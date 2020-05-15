import React, {Component} from 'react'
import ShoppingCartDataService from "../Service/ShoppingCartDataService"


export default class CartConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            message: null,
        }
        this.refreshShoppingCart = this.refreshShoppingCart.bind(this)
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
                    this.setState({list: response})
                }
            )
    }

    purchaseClicked() {
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
                            <th>Item Id:</th>
                            <th>Quantity:</th>
                            <th>Item Price:</th>
                            <th>Subtotal:</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map(    //allow you to loop through a list of items and define how each item should be displayed
                                list =>
                                    <tr style={{textAlign: "center"}} key={list.itemId}>

                                        <td>{list.itemId}</td>
                                        <td>{list.itemQuantity}</td>
                                        <td>{list.itemPrice}</td>
                                        <td>{list.itemQuantity * list.itemPrice}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div style={{textAlign: "right"}}>
                        Total: <b style={{"font-size": "18pt"}}>
                        {this.state.list.map(list => list.itemQuantity * list.itemPrice).reduce((a, b) => a + b, 0)}</b>
                    </div>
                    <div className="row">
                        <br/>
                        <button className="btn btn-success" onClick={this.purchaseClicked}>Purchase</button>
                    </div>
                </div>
            </div>
        )
    }
}


            
