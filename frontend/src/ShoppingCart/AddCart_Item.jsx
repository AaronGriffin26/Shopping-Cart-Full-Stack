import React, {Component} from 'react'
import ShoppingCartDataService from '../Service/ShoppingCartDataService'

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Customer_ID: this.props.match.params.Customer_ID,
            Item_Id: '',
            Quantity: 0,
            Item_Price: 0,

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
        let Cart_Items = {
            Customer_id: this.state.Customer_id,
            Item_Id: this.state.Item_Id,
            Quantity: this.state.Quantity,
            Item_Price: this.state.Item_Price,

        }

        ShoppingCartDataService.createCartItems(Cart_Items)()
            .then(this.props.history.push(`/Cart_Items`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "red"}}>
                    <h3 style={{textAlign: "center"}}>Add Cart Item</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Customer_ID:</label>
                            <input className="form-control" type="text" value={this.state.Customer_ID} disabled/>
                        </div>
                        <div>
                            <lable>Item ID:</lable>
                            <input className="form-control" type="text" name="Item_ID" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <lable>Quantity:</lable>
                            <input className="form-control" type="text" name="Quantity" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <lable>Item Price:</lable>
                            <input className="form-control" type="text" name="Item_Price" onChange={this.handleChange}/>
                        </div> <br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddItem
