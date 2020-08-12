package com.example.shoppingcartfullstack.dao;
import com.example.shoppingcartfullstack.entity.Customer;
import java.util.List;

public interface CustomerDAO {
    public List<Customer> findAll();
    public Customer finById(String theId);
    public void save(Customer thePart);
    public void deleteById(String theId);
}
