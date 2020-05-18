import React, {Component} from "react";
import ShoppingCartDataService from "../Service/ShoppingCartDataService";

export default class CustomerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.match.params.userName,
            list: []
        }
        this.retrieveCartId = this.retrieveCartId.bind(this)
    }

    async componentDidMount() {
        let shoppingCartId = await this.retrieveCartId();
        if (shoppingCartId === -1) {
            let theCart = {
                userName: this.state.userName,
                date: 0
            };
            await ShoppingCartDataService.createShoppingCart(theCart).then(response => {
                console.log(response);
            });
            shoppingCartId = await this.retrieveCartId();
        }
        if (shoppingCartId > -1)
            this.props.history.push(`/cartItems/${shoppingCartId}`);
    }

    async retrieveCartId() {
        await ShoppingCartDataService.retrieveAllShoppingCarts().then(response => {
            console.log(response);
            this.setState({list: response.data});
        });
        console.log(this.state.list);
        console.log(this.state.list.length);
        let shoppingCartId = this.state.list.reduce(
            (id, list) => {
                console.log(list.userName);
                console.log(this.state.userName);
                if (list.userName === this.state.userName)
                    return list.shoppingCartId;
                return id;
            }, -1
        );
        console.log(shoppingCartId);
        return shoppingCartId;
    }

    render() {
        return (
            <div className="container">
                <h2 style={{textAlign: "center"}}>Cart Items</h2>
                <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
                    <table className="table">
                        <thead>
                        <tr style={{textAlign: "center", color: "pink"}}>
                            <th>Shopping Cart ID</th>
                            <th>Username</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map(    //allow you to loop through a list of items and define how each item should be displayed
                                // eslint-disable-next-line array-callback-return
                                list => {
                                    return <tr style={{textAlign: "center"}} key={list.itemID}>
                                        <td>{list.shoppingCartId}</td>
                                        <td>{list.userName}</td>
                                        <td>{list.date}</td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.props.history.push(`/cartItems/${list.shoppingCartId}`)}>Enter
                                            </button>
                                        </td>
                                    </tr>
                                }
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}