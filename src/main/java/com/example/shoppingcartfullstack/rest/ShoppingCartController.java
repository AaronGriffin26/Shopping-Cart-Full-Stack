package com.example.shoppingcartfullstack.rest;

import com.example.shoppingcartfullstack.entity.ShoppingCart;
import com.example.shoppingcartfullstack.service.ShoppingCartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ShoppingCartController{

    private ShoppingCartService shoppingCartService;

    public ShoppingCartController(ShoppingCartService theShoppingCartService){
        shoppingCartService = theShoppingCartService;
    }

    // localhost:8080/api/shoppingCart/get/{id} in Postman
    @GetMapping("/shoppingCart/get/{id}") // @GetMapping gets a shoppingCart by id
    public ShoppingCart getShoppingCart(@PathVariable int id){
        ShoppingCart theShoppingCart = shoppingCartService.findById(id);
        if(theShoppingCart == null)
            throw new RuntimeException("Shopping Cart id not found - " + id);
        return theShoppingCart;
    }
    @PutMapping("/shoppingCart/put")
    public String putShoppingCart(){
        return "";
    }
    @PostMapping("/shoppingCart/post")
    public String postShoppingCart(){
        return "";
    }
    @DeleteMapping("/shoppingCart/delete/{id}")
    public String deleteShoppingCart(int id){
        return "";
    }
}