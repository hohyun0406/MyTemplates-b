package org.example.security.user.domain;

import lombok.Data;
import org.example.security.order.domain.OrderModel;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity @Data
@Table(name = "users")
public class UserModel {
    @Id @Column(name = "user_id")
    @GeneratedValue
    private long userId;
    @Column(name = "username", unique = true, nullable = false)
    private String username;
    @Column(name = "password", nullable = false)
    @Size(min=8, message = "8자리 이상 입력하시오")
    private String password;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "reg_date")
    private String regDate;
    @OneToMany(mappedBy = "user")
    private List<OrderModel> orders = new ArrayList<>();
    @ElementCollection(fetch = FetchType.EAGER)
    public List<Role> roles;

}