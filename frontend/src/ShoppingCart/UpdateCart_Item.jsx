import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik'
import ShoppingCartDataService from "../Service/ShoppingCartDataService";

class UpdateCart_Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCartId:this.props.match.params.shoppingCartId,
            itemId: this.props.match.params.itemId,
            itemQuantity: '',
            itePrice: '',

        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let list = {
            shoppingCartId:values.shoppingCartId,
            itemId: values.itemId,
            itemQuantity: values.itemQuantity,
            itemPrice: values.itemPrice,
        }

        ShoppingCartDataService.updateCart_Item(list)     //pending rest http links reason for underline error... will change once completed
            .then(() => this.props.history.push('/list'))
    }

    render() {
        let {shoppingCartId, itemId, itemQuantity, itemPrice} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "orange"}}>
                    <h3 style={{textAlign: "center"}}>Update Cart Items</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{shoppingCartId, itemId, itemQuantity, itemPrice}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Shopping Cart Id</label>
                                        <Field className="form-control" type="text" name="shoppingCartId" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Item Id</label>
                                        <Field className="form-control" type="text" name="itemId"/>
                                    </fieldset>
                                    <fieldset>
                                        <label>Quantity</label>
                                        <Field className="form-control" type="text" name="itemQuantity" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Item Price</label>
                                        <Field className="form-control" type="text" name="itemPrice" />
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
