import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik'
import ShoppingCartDataService from "../Service/ShoppingCartDataService";

class UpdateCart_Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemID: this.props.match.params.itemId,
            shoppingCartId: '',
            itemQuantity: '',
            itemPrice: ''
        }
        ShoppingCartDataService.retrieveCartItem(this.state.itemID).then(
            response => this.setState({
                shoppingCartId: response.data.shoppingCartId,
                itemID: response.data.itemID,
                itemQuantity: response.data.itemQuantity,
                itemPrice: response.data.itemPrice
            })
        )
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let theCartItems = {
            shoppingCartId: values.shoppingCartId,
            itemID: values.itemID,
            itemQuantity: values.itemQuantity,
            itemPrice: values.itemPrice,
        }

        ShoppingCartDataService.updateCartItem(theCartItems)     //pending rest http links reason for underline error... will change once completed
            .then(() => this.props.history.push(`/cartItems/${this.state.shoppingCartId}`)) //I think this should be push to another route
    }

    render() {
        let {shoppingCartId, itemID, itemQuantity, itemPrice} = this.state
        return (
            <div>
                <div className="jumbotron" style={{backgroundColor: "orange"}}>
                    <h3 style={{textAlign: "center"}}>Update Cart Items</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{shoppingCartId, itemID, itemQuantity, itemPrice}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Shopping Cart Id</label>
                                        <Field className="form-control" type="text" name="shoppingCartId" disabled/>
                                    </fieldset>
                                    <fieldset>
                                        <label>Item ID</label>
                                        <Field className="form-control" type="text" name="itemID" disabled/>
                                    </fieldset>
                                    <fieldset>
                                        <label>Quantity</label>
                                        <Field className="form-control" type="text" name="itemQuantity"/>
                                    </fieldset>
                                    <fieldset>
                                        <label>Item Price</label>
                                        <Field className="form-control" type="text" name="itemPrice"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }


}


export default UpdateCart_Item
