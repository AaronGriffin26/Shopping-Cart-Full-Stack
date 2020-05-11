import axios from 'axios'


 class ShoppingCartDataService {

 //shoppingCart

  retrieveAllCartItems() {
   return axios.get(`http://localhost:8080/cart/listCarts`);
  }

  deleteCartItems(itemId) {     //cart item
   return axios.delete(`http://localhost:8080/cart/delete/{id}${itemId}`)
  }

  createCartItems(theCartItems)  {
   return axios.post(`http://localhost:8080/cart/post`, theCartItems)
  }






}

//To be completed once REST HTTP methods have been implemented
export default new ShoppingCartDataService ()