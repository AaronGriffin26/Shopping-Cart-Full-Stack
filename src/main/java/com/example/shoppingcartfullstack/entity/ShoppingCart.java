package com.example.shoppingcartfullstack.entity;

import javax.persistence.*;

@Entity
@Table(name="shopping_cart")
public class ShoppingCart{
    @Id private int shoppingCartId;
    @Column(name="User_Name") private String userName;
    @Column(name="Date") private String date;

    public ShoppingCart(){
        shoppingCartId = 0;
        userName = "";
        date = "";
    }

    public ShoppingCart(int shoppingCartId, String userName, String date){
        this.shoppingCartId = shoppingCartId;
        this.userName = userName;
        this.date = date;
    }

    public int getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(int shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "ShoppingCart{" +
                "shoppingCartId=" + shoppingCartId +
                ", userName='" + userName + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}

/*import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;

public class ShoppingCart {
    ArrayList<Item> list = new ArrayList<>();
    private int count;
    public ShoppingCart(int count){
        this.count = count;
        for(int i = 1; i <= count; i++){
            list.add(new Item(i, 1.00));
        }
    }
    public ArrayList<Item> getList() {
        return list;
    }
    public void setList(ArrayList<Item> list) {
        this.list = list;
    }
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }
    public String receipt(){
        String temp = "";
        int size = list.size();
        double sum = 0.0;
        NumberFormat format = NumberFormat.getCurrencyInstance(Locale.US);
        temp = temp.concat("Your shopping cart has " + size + " items.\n");
        for(int i = 0; i < size; i++) {
            Item item = list.get(i);
            sum += item.getPrice();
            temp = temp.concat("Item " + item.getId() + ", Price: $" + format.format(item.getPrice()) + "\n");
        }
        temp = temp.concat("Your total is $" + format.format(sum) + "\n");
        return temp;
    }
    @Override
    public String toString() {
        return "Your Shopping Cart has "+ count + " items. \n" + list.toString();
    }
}
*/