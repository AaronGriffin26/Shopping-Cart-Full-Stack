import axios from 'axios'


class ShoppingCartDataService{


    retrieveAllCartItems(){
        return axios.get('http://localhost:8080/cart/listCarts');

    }

    deleteCartItems(itemId){
        return axios.delete(`http://localhost:8080/cart/delete/${itemId}`)
    }

    createCartItem(theCartItems){
        return axios.post('http://localhost:8080/cart/post', theCartItems)
    }
}
export default new ShoppingCartDataService();