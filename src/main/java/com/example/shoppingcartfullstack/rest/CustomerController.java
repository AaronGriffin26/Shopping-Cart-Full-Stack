package com.example.shoppingcartfullstack.rest;

import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("Customer")
public class CustomerController{
    @GetMapping("/customerClass/get/{id}")
    public String getCustomer(int id){
        return "";
    }
    @PutMapping("/customerClass/put")
    public String putCustomer(){
        return "";
    }
    @PostMapping("/customerClass/post")
    public String postCustomer(){
        return "";
    }
    @DeleteMapping("/customerClass/delete/{id}")
    public String deleteCustomer(int id){
        return "";
    }
}