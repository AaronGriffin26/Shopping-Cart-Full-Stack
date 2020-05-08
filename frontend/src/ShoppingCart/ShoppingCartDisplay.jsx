import React, { Component } from 'react'
import ShoppingCartDataService from "../Service/ShoppingCartDataService"

  export default class ShoppingCartDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        ShoppingCartDataService.getShoppingCart(id)    // this will update depending on http method call
            .then(
                response => {
                    this.setState({list: response.data})   //list is name of shopping cart arraylist
                }
            )
    }

    deleteItemClicked(itemId, itemQuantity, itemPrice) {
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

    addItemClicked(){
         console.log('Add Item Clicked')
         this.props.history.push('/list/-1')
     }
     updateItemClicked(itemId, itemQuantity){
         console.log('Update Item Clicked')
         this.props.history.push('/list/${itemId}/${itemQuantity}')
    }




    render() {
        return(
            <div className="container">
                <h1 style={{textAlign:"center"}}>Shopping Cart</h1><br></br>
                <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                    <table className="table">
                        <thead>
                        <tr style={{textAlign: "center" , color: "black"}}> 
        
                            <th>Shopping_Cart_ID</th>
                            <th>Item_ID</th>
                            <th>Quantity</th>
                            <th>Item_Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map (
                                list =>
                                    <tr style={{textAlign: "center"}} key={list.list}>
                                    
                                        <td>{list.itemId}</td>
                                        <td>{list.itemQuantity}</td>
                                        <td>{list.itemPrice}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteItemClicked(list.itemId, list.itemQuantity, list.itemPrice)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateItemClicked(list.itemId, list.itemQuantity)}>Update</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <br/>
                        <button className="btn btn-success" onClick={this.addItemClicked}>Add Item</button>
                    </div>
                </div>
            </div>
        )
    }
}

            
