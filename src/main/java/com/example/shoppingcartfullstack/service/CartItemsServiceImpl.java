package com.example.shoppingcartfullstack.service;

import com.example.shoppingcartfullstack.dao.CartItemsDAO;
import com.example.shoppingcartfullstack.entity.CartItems;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class CartItemsServiceImpl implements CartItemsService{
    private CartItemsDAO cartItemsDAO;
    @Autowired
    public CartItemsServiceImpl(CartItemsDAO theCartItemsDAO){
        cartItemsDAO = theCartItemsDAO;
    }
    @Override
    @Transactional
    public List<CartItems> findAll() {
        return cartItemsDAO.findAll();
    }
    @Override
    @Transactional
    public CartItems finById(int theId) {
        return cartItemsDAO.finById(theId);
    }
    @Override
    @Transactional
    public void save(CartItems theCartItem) {
        cartItemsDAO.save(theCartItem);
    }
    @Override
    @Transactional
    public void deleteById(int theId) {
        cartItemsDAO.deleteById(theId);
    }
}