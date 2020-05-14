import React, {Component} from "react";
import ShoppingCartDataService from "../Service/ShoppingCartDataService";
import {Field, Form, Formik} from "formik";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.match.params.userName,
            password: '',


        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let theCustomer = {
            userName: values.userName,
            password: values.password,

        }

        ShoppingCartDataService.createUser(theCustomer)     //pending rest http links reason for underline error... will change once completed
            .then(() => this.props.history.push('/theCustomer'));
    }

    render() {
        let {userName, password} = this.state;
        return (
            <div>
                <div>
                    <h3 style={{textAlign: "center"}}>Login</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{userName, password}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                <fieldset className="form-group">
                                    <label>UserName</label>
                                    <Field className="form-control" type="text" name="userName"/>
                                </fieldset>

                            <fieldset className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                            </fieldset>

                            <filedset className="form-group">
                            <filedset className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </filedset>
                            </filedset>
                            <button variant="btn btn-primary btn-block">Submit</button>
                            {/*history seems to not be accepted here*/}
                            {/*<button variant="btn btn-primary btn-block" onClick={()=> history.push('/cartItems')}>Submit</button>*/}

                            </Form>
                            )
                            }
                            </Formik>
                            </div>
                            </div>
                            )

                            }
                            }
