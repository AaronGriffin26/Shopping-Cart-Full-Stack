package com.example.shoppingcartfullstack.rest;

import com.example.shoppingcartfullstack.entity.ShoppingCart;
import com.example.shoppingcartfullstack.service.ShoppingCartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins= {"http://localhost:3000"})
@RequestMapping("/api")
public class ShoppingCartController{

    private ShoppingCartService shoppingCartService;

    public ShoppingCartController(ShoppingCartService theShoppingCartService){
        shoppingCartService = theShoppingCartService;
    }

    // localhost:8080/api/shoppingCart/get/{id} in Postman
    @GetMapping("/shoppingCart/get/{id}") // gets a shoppingCart by id
    public ShoppingCart getShoppingCart(@PathVariable int id){
        ShoppingCart theShoppingCart = shoppingCartService.findById(id);
        if(theShoppingCart == null)
            throw new RuntimeException("Shopping Cart id not found - " + id);
        return theShoppingCart;
    }

    // localhost:8080/api/shoppingCart/listCarts in Postman
    @GetMapping("/shoppingCart/listCarts") // gets a list of shopping carts
    public List<ShoppingCart> getListOfCarts(){
        return shoppingCartService.findAll();
    }

    // localhost:8080/api/shoppingCart/put in Postman
    @PutMapping("/shoppingCart/put") // updates an existing shopping cart
    public ShoppingCart putShoppingCart(@RequestBody ShoppingCart theShoppingCart){
        shoppingCartService.save(theShoppingCart);
        return theShoppingCart;
    }

    //   in Postman
    @PostMapping("/shoppingCart/post") // creates a new shopping cart
    public ShoppingCart postShoppingCart(@RequestBody ShoppingCart theShoppingCart){
        theShoppingCart.setShoppingCartId(0);
        shoppingCartService.save(theShoppingCart);
        return theShoppingCart;
    }

    // localhost:8080/api/shoppingCart/delete/{id} in Postman
    @DeleteMapping("/shoppingCart/delete/{id}") // deletes an existing shopping cart
    public String deleteShoppingCart(@PathVariable int id){
        ShoppingCart tempCart = shoppingCartService.findById(id);
        if(tempCart == null)
            throw new RuntimeException("Shopping Cart is not found - " + id);
        shoppingCartService.deleteById(id);
        return "Delete shopping cart id - " + id;
    }
}