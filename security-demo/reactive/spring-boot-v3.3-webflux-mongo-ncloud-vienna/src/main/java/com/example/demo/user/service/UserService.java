package com.example.demo.user.service;

import java.util.Optional;

import com.example.demo.common.domain.Messenger;
import com.example.demo.user.domain.UserDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.user.domain.UserModel;
import com.example.demo.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {


  private final UserRepository userRepository;

  public Flux<UserModel> getAllUsers() {
    return userRepository.findAll();
  }

  public Mono<UserModel> getUserDetailByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  public Mono<UserModel> getUserDetailById(String id) {
    return userRepository.findById(id);
  }

  public Mono<UserModel> addUser(UserModel user) {
    return userRepository.save(user);
  }

  public Mono<UserModel> updateUser(String id, UserModel user) {
    return userRepository.findById(id).map(Optional::of).defaultIfEmpty(Optional.empty())
        .flatMap(optionalUser -> {
          if (optionalUser.isPresent()) {
            user.setUserId(id);
            return userRepository.save(user);
          }

          return Mono.empty();
        });
  }

  public Mono<Void> deleteUser(String id) {
    return userRepository.deleteById(id);
  }

  public Mono<Void> deleteAllUsers() {
    return userRepository.deleteAll();
  }

  public Flux<UserModel> findByLastName(String lastName) {
    return userRepository.findByLastName(lastName);
  }

  public Mono<Messenger> login(UserDTO user){
    log.info("서비스로 들어오는 email : {}",user.getEmail());
    Mono<UserModel> temp = userRepository.findByEmail(user.getEmail());
    log.info("User Repo에서 가져온 로그인 정보 : {}", temp.toString());
    temp.subscribe(System.out::println);
    return null;
  }

}