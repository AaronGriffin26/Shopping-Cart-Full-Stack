package com.shoppingcart.demo.entity;


import javax.persistence.*;

@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "shopping_cart")
public class ShoppingCart {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "item")
    private String item;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "ItemPrice")
    private double ItemPrice;

    public ShoppingCart(){

    }

    public ShoppingCart(int id, String item, int quantity, double itemPrice) {
        this.id = id;
        this.item = item;
        this.quantity = quantity;
        ItemPrice = itemPrice;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getItemPrice() {
        return ItemPrice;
    }

    public void setItemPrice(double itemPrice) {
        ItemPrice = itemPrice;
    }

    @Override
    public String toString() {
        return "ShoppingCart{" +
                "id:" + id +
                ", item:'" + item + '\'' +
                ", quantity:" + quantity +
                ", ItemPrice:" + ItemPrice +
                '}';
    }
}
