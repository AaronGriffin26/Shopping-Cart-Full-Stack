package com.example.shoppingcartfullstack.service;

import com.example.shoppingcartfullstack.dao.CustomerDAO;
import com.example.shoppingcartfullstack.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{
    private CustomerDAO customerDAO;
    @Autowired
    public CustomerServiceImpl(CustomerDAO theCustomerDAO){
        customerDAO = theCustomerDAO;
    }
    @Override
    @Transactional
    public List<Customer> findAll() {
        return customerDAO.findAll();
    }
    @Override
    @Transactional
    public Customer finById(String theId) {
        return customerDAO.finById(theId);
    }
    @Override
    @Transactional
    public void save(Customer theCartItem) {
        customerDAO.save(theCartItem);
    }
    @Override
    @Transactional
    public void deleteById(String theId) {
        customerDAO.deleteById(theId);
    }
}