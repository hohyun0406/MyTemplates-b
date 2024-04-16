package com.rod.api.user.service;

import com.rod.api.common.junit.Item;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import com.rod.api.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UserServiceImplTest {

    private UserServiceImpl userService;
    private UserRepository userRepository;
    @Autowired

    @Test
    @DisplayName("유저 수정")
    void save() {
    }

    @Test
    @DisplayName("유저 삭제")
    void deleteById() {
    }

    @Test
    @DisplayName("정보 수정하기")
    void modify() {

    }

    @Test
    @DisplayName("전체 유저 불러오기")
    void findAll() {
    }

    @Test
    @DisplayName("아이디로 찾기")
    void findById() {
    }

    @Test
    @DisplayName("총 숫자 세기")
    void count() {
    }


}