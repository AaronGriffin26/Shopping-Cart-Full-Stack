package com.example.shoppingcartfullstack.service;

import com.example.shoppingcartfullstack.dao.ShoppingCartDAO;
import com.example.shoppingcartfullstack.entity.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService{
    private ShoppingCartDAO shoppingCartDAO;
    @Autowired
    public ShoppingCartServiceImpl(ShoppingCartDAO theShoppingCartDAO){
        shoppingCartDAO = theShoppingCartDAO;
    }
    @Override
    @Transactional
    public List<ShoppingCart> findAll() {
        return shoppingCartDAO.findAll();
    }
    @Override
    @Transactional
    public ShoppingCart findById(int theId) {
        return shoppingCartDAO.finById(theId);
    }
    @Override
    @Transactional
    public void save(ShoppingCart thePart) {
        shoppingCartDAO.save(thePart);
    }
    @Override
    @Transactional
    public void deleteById(int theId) {
        shoppingCartDAO.deleteById(theId);
    }
}