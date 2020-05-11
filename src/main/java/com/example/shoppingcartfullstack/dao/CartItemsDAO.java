package com.example.shoppingcartfullstack.dao;
import com.example.shoppingcartfullstack.entity.CartItems;
import java.util.List;

public interface CartItemsDAO {
    public List<CartItems> findAll();
    public CartItems finById(int theId);
    public void save(CartItems thePart);
    public void deleteById(int theId);
}
