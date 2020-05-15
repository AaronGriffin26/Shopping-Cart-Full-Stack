import React, {Component} from 'react'
import ShoppingCartDataService from "../Service/ShoppingCartDataService"


export default class ListShoppingCart extends Component {
    constructor(props) {
        super(props)             //To display items, we need to make them available to the component.
        this.state = {          // we add items to the state of the component and initialize in the constructor
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

    deleteItemClicked(itemId) {
        console.log('Delete Item Clicked')
        ShoppingCartDataService.deleteCartItems(itemId)    // method call from ShoppingCartDataServices-- call to the backend
            .then(
                response => {
                    this.setState({message: `Deleted Item ID: ${itemId} `})
                    alert(this.state.message)
                    this.refreshShoppingCart();
                }
            )
    }

    addItemClicked(shoppingCartId) {
        console.log('Add Item Clicked')
        console.log(shoppingCartId)
        this.props.history.push(`/addItem/${shoppingCartId}`)
    }

    updateItemClicked(itemId) {
        console.log('Update Item Clicked')
        this.props.history.push(`/cartUpdate/${itemId}`)
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
                                list =>
                                    <tr style={{textAlign: "center"}} key={list.shoppingCartId}>

                                        <td>{list.itemId}</td>
                                        <td>{list.itemQuantity}</td>
                                        <td>{list.itemPrice}</td>

                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deleteItemClicked(list.itemId, list.itemQuantity, list.itemPrice)}>Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updateItemClicked(list.itemId)}>Update
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <br/>
                        <button className="btn btn-success"
                                onClick={() => this.addItemClicked(this.state.list[0].shoppingCartId)}>Add Item
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


            
