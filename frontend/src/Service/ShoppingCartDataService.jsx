import axios from 'axios'


class ShoppingCartDataService {


    retrieveAllCartItems() {
        return axios.get('http://localhost:8080/api/cart/listCarts');
    }

    deleteCartItems(itemId) {
        return axios.delete(`http://localhost:8080/api/cart/delete/${itemId}`)
    }

    createCartItem(theCartItems) {      //post method for creating/adding cart items
        return axios.post('http://localhost:8080/api/cart/post', theCartItems)
    }

    getUser(userName) {
        return axios.get(`http://localhost:8080/api/customerClass/get/${userName}`)
    }

    createUser(theCustomer) {
        return axios.post(`http://localhost:8080/api/customerClass/post`, theCustomer)
    }

    getCartItem(cartId) {
        return axios.get(`http://localhost:8080/api/cart/get/${cartId}`)
    }

    updateCartItem(theCartItems) {
        return axios.put('http://localhost:8080/api/cart/put', theCartItems)
    }

    purchaseShoppingCart() {
        // TODO: Implement purchasing displayed cart
        return axios.get('http://localhost:8080/api/cart/listCarts');
    }
}

export default new ShoppingCartDataService();