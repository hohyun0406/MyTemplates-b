package com.rod.api.user.repository;

import com.rod.api.article.model.Article;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query("select u from users u where u.username =:username")
    public Optional<User> findByUsername(@Param("username") String username);

    @Modifying
    @Query("update users set token = :token where id = :id")
    public void modifyTokenById(@Param("id") Long id, @Param("token") String token);


}