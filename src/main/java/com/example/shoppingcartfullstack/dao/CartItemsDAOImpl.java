package com.example.shoppingcartfullstack.dao;

import com.example.shoppingcartfullstack.entity.CartItems;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CartItemsDAOImpl implements CartItemsDAO{
    private EntityManager entityManager;
    @Autowired
    public CartItemsDAOImpl(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }
    @Override
    public List<CartItems> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<CartItems> theQuery = currentSession.createQuery("from Cart_Items", CartItems.class);
        List<CartItems> cartItems = theQuery.getResultList();
        return cartItems;
    }
    @Override
    public CartItems finById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        CartItems cartItems = currentSession.get(CartItems.class, theId);
        return cartItems;
    }
    @Override
    public void save(CartItems theShoppingCart) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theShoppingCart);
    }
    @Override
    public void deleteById(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query theQuery = currentSession.createQuery("delete from Cart_Items where id=:Item_ID");
        theQuery.setParameter("Item_ID", id);
        theQuery.executeUpdate();
    }
}
