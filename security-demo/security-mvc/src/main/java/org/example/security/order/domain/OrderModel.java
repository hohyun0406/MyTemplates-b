//package org.example.security.order.domain;
//
//import org.example.security.item.domain.ItemModel;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.Table;
//import lombok.Data;
//import org.example.security.user.domain.UserModel;
//
//@Entity @Data
//@Table(name = "orders")
//public class OrderModel {
//    @Id @Column(name = "order_id")
//    private long orderId;
//    @Column(name = "price")
//    private long price;
//    @Column(name = "order_status")
//    private String count;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private UserModel user;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "item_id")
//    private ItemModel item;
//}