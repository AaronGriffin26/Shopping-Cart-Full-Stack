package com.example.shoppingcartfullstack.rest;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Cart_Items")
public class CartItemsController{
    @GetMapping("cart/get/{id}")
    public String getCartItems(int id){
        return "";
    }
    @PutMapping("cart/put")
    public String putCartItems(){
        return "";
    }
    @PostMapping("cart/post")
    public String postCartItems(){
        return "";
    }
    @DeleteMapping("cart/delete/{id}")
    public String deleteCartItems(int id){
        return "";
    }
}
