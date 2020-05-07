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
        ShoppingCartDisplay.retrieveAllItems()    // this will update depending on http method call
            .then(
                response => {
                    this.setState({list: response.data})
                }
            )
    }

    

    deleteItemClicked(Item_ID, Quantity, Item_Price) {
        console.log('Delete Item Clicked')
        ShoppingCartDataService.deleteItem_ID(Item_ID)    // this will update depending on http method call
            .then(
                response => {
                    this.setState({message: `Deleted Item ID: ${Item_ID} `})
                    alert(this.state.message)
                    this.refreshShoppingCart();
                }
            )
    }


     addItemClicked(){
         console.log('Add Item Clicked')
         this.props.history.push('/list/-1')
     }
/*
    updateItemClicked(Item_ID, Quantity) {
        console.log('Update Item Clicked')
        this.props.history.push(`/list/${Item_ID}/${Quantity}')
    }*/
  

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
                                    <tr style={{textAlign: "center"}} key={list.Shopping_Cart_ID}>
                                    
                                        <td>{list.Item_ID}</td>
                                        <td>{list.Quantity}</td>
                                        <td>{list.Item_Price}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteItemClicked(list.Item_ID, list.Quantity, list.Item_Price)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateItemClicked(list.Item_ID, list.Quantity)}>Update</button></td>
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

            
