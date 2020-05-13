package com.example.shoppingcartfullstack.rest;
import com.example.shoppingcartfullstack.entity.CartItems;
import com.example.shoppingcartfullstack.service.CartItemsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins= {"http://localhost:3000"})
@RequestMapping("/api")
@RestController
public class CartItemsController{

    private final CartItemsService cartItemsService;

    public CartItemsController(CartItemsService theCartItemsService){
        cartItemsService = theCartItemsService;
    }

    // localhost:8080/api/cart/get/{id} in Postman
    @GetMapping("/cart/get/{id}") // gets a cart item by id
    public CartItems getShoppingCart(@PathVariable int id){
        CartItems theCartItem = cartItemsService.finById(id);
        if(theCartItem == null)
            throw new RuntimeException("Cart item id not found - " + id);
        return theCartItem;
    }

    // localhost:8080/api/cart/listCarts in Postman
    @GetMapping("/cart/listCarts") // gets a list of cart items
    public List<CartItems> getListOfCarts(){
        return cartItemsService.findAll();
    }

    // localhost:8080/api/cart/put in Postman
    @PutMapping("/cart/put") // updates an existing cart item
    public CartItems putShoppingCart(@RequestBody CartItems theCartItem){
        cartItemsService.save(theCartItem);
        return theCartItem;
    }

    // localhost:8080/api/cart/post in Postman
    @PostMapping("/cart/post") // creates a new cart item
    public CartItems postShoppingCart(@RequestBody CartItems theCartItems){
        theCartItems.setItemID(0);
        cartItemsService.save(theCartItems);
        return theCartItems;
    }

    // localhost:8080/api/cart/delete/{id} in Postman
    @DeleteMapping("/cart/delete/{id}") // deletes an existing cart item
    public String deleteShoppingCart(@PathVariable int id){
        CartItems theCartItem = cartItemsService.finById(id);
        if(theCartItem == null)
            throw new RuntimeException("Cart Item is not found - " + id);
        cartItemsService.deleteById(id);
        return "Delete cart item id - " + id;
    }
}