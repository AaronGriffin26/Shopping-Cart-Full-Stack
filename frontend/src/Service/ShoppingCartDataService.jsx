import axios from 'axios'


class ShoppingCartDataService {


    retrieveAllCartItems() {
        return axios.get('http://localhost:8080/api/cart/listCarts');
    }

    retrieveCartItem(itemId) {
        return axios.get(`http://localhost:8080/api/cart/get/${itemId}`);
    }

    deleteCartItem(itemId) {
        return axios.delete(`http://localhost:8080/api/cart/delete/${itemId}`)
    }

    createCartItem(theCartItem) {      //post method for creating/adding cart items
        return axios.post('http://localhost:8080/api/cart/post', theCartItem)
    }

    updateCartItem(theCartItem) {
        return axios.put('http://localhost:8080/api/cart/put', theCartItem)
    }

    getUser(userName) {
        return axios.get(`http://localhost:8080/api/customerClass/get/${userName}`)
    }

    createUser(theCustomer) {
        return axios.post(`http://localhost:8080/api/customerClass/post`, theCustomer)
    }

    createShoppingCart(theCart) {
        return axios.post(`http://localhost:8080/api/shoppingCart/post`, theCart)
    }

    retrieveAllShoppingCarts() {
        return axios.get(`http://localhost:8080/api/shoppingCart/listCarts`);
    }

    purchaseShoppingCart() {
        // TODO: Implement purchasing displayed cart
        return axios.get('http://localhost:8080/api/cart/listCarts');
    }
}

export default new ShoppingCartDataService();