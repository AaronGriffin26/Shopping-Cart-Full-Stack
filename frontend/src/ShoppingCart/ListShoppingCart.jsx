import React, {Component} from 'react'
import ShoppingCartDataService from "../Service/ShoppingCartDataService"


export default class ListShoppingCart extends Component {
    constructor(props) {
        super(props)             //To display items, we need to make them available to the component.
        this.state = {          // we add items to the state of the component and initialize in the constructor
            shoppingCartId: this.props.match.params.shoppingCartId,
            list: [],
            message: null,
        }
        this.refreshShoppingCart = this.refreshShoppingCart.bind(this)
        this.deleteItemClicked = this.deleteItemClicked.bind(this)
        this.updateItemClicked = this.updateItemClicked.bind(this)
        this.addItemClicked = this.addItemClicked.bind(this)
    }

    componentDidMount() {
        this.refreshShoppingCart();
    }

    refreshShoppingCart() {
        ShoppingCartDataService.retrieveAllCartItems()    // this will update depending on http method call
            .then(
                response => {          //when the response comes back with data, we update the state. and will need to update render method once data is in the state and you need to display it.
                    console.log(response);
                    this.setState({list: response.data})   //list is name of shopping cart arraylist
                }
            )
    }

    deleteItemClicked(itemID) {
        console.log('Delete Item Clicked')
        ShoppingCartDataService.deleteCartItem(itemID)    // method call from ShoppingCartDataServices-- call to the backend
            .then(
                response => {
                    this.setState({message: `Deleted Item ID: ${itemID} `})
                    alert(this.state.message)
                    this.refreshShoppingCart();
                }
            )
    }

    addItemClicked() {
        console.log('Add Item Clicked')
        this.props.history.push(`/addItem/${this.state.shoppingCartId}`)
    }

    updateItemClicked(itemID) {
        console.log('Update Item Clicked')
        this.props.history.push(`/cartUpdate/${itemID}`)
    }

    goToConfirmation() {
        this.props.history.push(`/confirm/${this.state.shoppingCartId}`)
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
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map(    //allow you to loop through a list of items and define how each item should be displayed
                                // eslint-disable-next-line array-callback-return
                                list => {
                                    if (list.shoppingCartId - this.state.shoppingCartId > -0.1 && list.shoppingCartId - this.state.shoppingCartId < 0.1) {
                                        return <tr style={{textAlign: "center"}} key={list.itemID}>
                                            <td>{list.itemID}</td>
                                            <td>{list.itemQuantity}</td>
                                            <td>{list.itemPrice}</td>
                                            {console.log(list)}

                                            <td>
                                                <button className="btn btn-warning"
                                                        onClick={() => this.deleteItemClicked(list.itemID)}>Delete
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-success"
                                                        onClick={() => this.updateItemClicked(list.itemID)}>Update
                                                </button>
                                            </td>
                                        </tr>
                                    }
                                }
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <br/>
                        <button className="btn btn-success"
                                onClick={() => this.addItemClicked()}>Add Item
                        </button>
                        <button className="btn btn-success"
                                onClick={() => this.goToConfirmation()}>Checkout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


            
