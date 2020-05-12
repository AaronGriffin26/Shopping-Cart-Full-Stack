package com.example.shoppingcartfullstack.entity;

import javax.persistence.*;

@Entity
@Table(name="customer")
public class Customer{
    @Id private String userName;
    @Column(name="PASSWORD") private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}