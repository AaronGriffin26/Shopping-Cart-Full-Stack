package com.example.shoppingcartfullstack.dao;
import com.example.shoppingcartfullstack.entity.ShoppingCart;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ShoppingCartDAOImpl implements ShoppingCartDAO{
    private EntityManager entityManager;
    @Autowired
    public ShoppingCartDAOImpl(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }
    @Override
    public List<ShoppingCart> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<ShoppingCart> theQuery = currentSession.createQuery("from Shopping_Cart", ShoppingCart.class);
        List<ShoppingCart> shoppingCarts = theQuery.getResultList();
        return shoppingCarts;
    }
    @Override
    public ShoppingCart finById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        ShoppingCart theShoppingCart = currentSession.get(ShoppingCart.class, theId);
        return theShoppingCart;
    }
    @Override
    public void save(ShoppingCart theShoppingCart) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theShoppingCart);
    }
    @Override
    public void deleteById(int userId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query theQuery = currentSession.createQuery("delete from Shopping_Cart where id=:User_Name");
        theQuery.setParameter("User_Name", userId);
        theQuery.executeUpdate();
    }
}