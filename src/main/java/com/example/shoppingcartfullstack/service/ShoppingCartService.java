package com.example.shoppingcartfullstack.service;
import com.example.shoppingcartfullstack.entity.ShoppingCart;
import java.util.List;

public interface ShoppingCartService {
    public List<ShoppingCart> findAll();
    public ShoppingCart findById(int theId);
    public void save(ShoppingCart thePart);
    public void deleteById(int theId);
}
