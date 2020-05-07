package com.example.shoppingcartfullstack.entity;

import javax.persistence.*;

@Entity
@Table(name="Cart_Items")
public class CartItems{
    @Id private int itemID;
    @Column(name="Shopping_Cart_ID") private int shoppingCartId;
    @Column(name="Quantity") private int itemQuantity;
    @Column(name="Item_Price") private double itemPrice;

    public CartItems(){
        itemID = 0;
        shoppingCartId = 0;
        itemQuantity = 0;
        itemPrice = 0.0;
    }

    public CartItems(int itemID, int shoppingCartId, int itemQuantity, double itemPrice){
        this.itemID = itemID;
        this.shoppingCartId = shoppingCartId;
        this.itemQuantity = itemQuantity;
        this.itemPrice = itemPrice;
    }

    public int getItemID() {
        return itemID;
    }

    public void setItemID(int itemID) {
        this.itemID = itemID;
    }

    public int getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(int shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }

    public int getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public double getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(double itemPrice) {
        this.itemPrice = itemPrice;
    }

    @Override
    public String toString() {
        return "CartItems{" +
                "itemID=" + itemID +
                ", shoppingCartId=" + shoppingCartId +
                ", itemQuantity=" + itemQuantity +
                ", itemPrice=" + itemPrice +
                '}';
    }
}