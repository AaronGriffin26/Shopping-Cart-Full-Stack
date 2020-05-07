package com.example.shoppingcartfullstack.dao;
import com.example.shoppingcartfullstack.entity.ShoppingCart;
import java.util.List;

public interface ShoppingCartDAO {
    public List<ShoppingCart> findAll();
    public ShoppingCart finById(int theId);
    public void save(ShoppingCart thePart);
    public void deleteById(int theId);
}
