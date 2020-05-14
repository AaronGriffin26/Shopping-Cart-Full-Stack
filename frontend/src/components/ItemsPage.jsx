import React, {Component} from 'react'

class ItemsPage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h3>Add Cart Item</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <table className="form-group">
                            <tr>
                                <td>Customer_ID:</td>
                                <td><input className="form-control" type="text" value="Yuh" disabled/></td>
                            </tr>
                            <tr>
                                <td>Item ID:</td>
                                <td><input className="form-control" type="text" value="Yuh" disabled/></td>
                            </tr>
                            <tr>
                                <td>Quantity:</td>
                                <td><input className="form-control" type="text" value="Yuh" disabled/></td>
                            </tr>
                            <tr>
                                <td>Item Price:</td>
                                <td><input className="form-control" type="text" value="Yuh" disabled/></td>
                            </tr>
                        </table>
                        <br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button>
                        <br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ItemsPage
