package com.example.shoppingcartfullstack.entity;

import java.text.NumberFormat;
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
