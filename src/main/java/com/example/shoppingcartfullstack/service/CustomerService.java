package com.example.shoppingcartfullstack.service;

import com.example.shoppingcartfullstack.entity.Customer;

import java.util.List;

public interface CustomerService {
    public List<Customer> findAll();
    public Customer finById(String theId);
    public void save(Customer thePart);
    public void deleteById(String theId);
}
