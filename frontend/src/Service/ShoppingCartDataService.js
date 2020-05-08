import axios from 'axios'

 class ShoppingCartDataService {

  getShoppingCart() {        // shopping cart
   return axios.get(`http://localhost:8080/shoppingCart/get/{id}`);
  }

   CreateCartItems(list){          //cart items                                         //creating/adding cart items
    return axios.post(`http://localhost:8080/cart/post`, list)
   }

  deleteCartItems(itemId) {     //cart items
   return axios.delete(`http://localhost:8080/cart/delete/{id}${itemId}`)
  }






}

//To be completed once REST HTTP methods have been implemented
export default ShoppingCartDataService