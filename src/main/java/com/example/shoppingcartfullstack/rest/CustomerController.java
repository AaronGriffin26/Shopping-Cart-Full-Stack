package com.example.shoppingcartfullstack.rest;

import com.example.shoppingcartfullstack.entity.Customer;
import com.example.shoppingcartfullstack.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins= {"http://localhost:3000"})
@RequestMapping("/api")
public class CustomerController{

    private CustomerService customerService;

    public CustomerController(CustomerService theCustomerService){
        customerService = theCustomerService;
    }

    // localhost:8080/api/customerClass/get/{id} in Postman
    @GetMapping("/customerClass/get/{id}") // gets a customer by id
    public Customer getShoppingCart(@PathVariable String id){
        Customer theCustomer = customerService.finById(id);
        if(theCustomer == null)
            throw new RuntimeException("Customer id not found - " + id);
        return theCustomer;
    }

    // localhost:8080/api/customerClass/listCarts in Postman
    @GetMapping("/customerClass/listCarts") // gets a list of cart items
    public List<Customer> getListOfCarts(){
        return customerService.findAll();
    }

    // localhost:8080/api/customerClass/put in Postman
    @PutMapping("/customerClass/put") // updates an existing customer
    public Customer putShoppingCart(@RequestBody Customer theCustomer){
        customerService.save(theCustomer);
        return theCustomer;
    }

    // localhost:8080/api/customerClass/post in Postman
    @PostMapping("/customerClass/post") // creates a new customer
    public Customer postShoppingCart(@RequestBody Customer theCustomer){
        customerService.save(theCustomer);
        return theCustomer;
    }

    // localhost:8080/api/customerClass/delete/{id} in Postman
    @DeleteMapping("/customerClass/delete/{id}") // deletes an existing customer
    public String deleteShoppingCart(@PathVariable String id){
        Customer theCustomer = customerService.finById(id);
        if(theCustomer == null)
            throw new RuntimeException("Customer is not found - " + id);
        customerService.deleteById(id);
        return "Delete customer id - " + id;
    }
}