import axios from 'axios'


class ShoppingCartDataService{


    retrieveAllCartItems(){
        return axios.get('http://localhost:8080/cart/listCarts');

    }

    deleteCartItems(itemId){
        return axios.delete(`http://localhost:8080/cart/delete/${itemId}`)
    }

    createCartItem(theCartItems){      //post method for creating/adding cart items
        return axios.post('http://localhost:8080/cart/post', theCartItems)
    }

    createUser(theCustomer){
        return axios.post(`http://localhost:8080/customerClass/post`,theCustomer)

    }

}
export default new ShoppingCartDataService();